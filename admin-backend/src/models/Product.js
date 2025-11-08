import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    uz: { type: String, required: true },
    ru: { type: String, required: true },
    en: { type: String, required: true }
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    uz: String,
    ru: String,
    en: String
  },
  shortDescription: {
    uz: String,
    ru: String,
    en: String
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  comparePrice: {
    type: Number,
    min: 0
  },
  cost: {
    type: Number,
    min: 0
  },
  sku: {
    type: String,
    unique: true,
    sparse: true
  },
  barcode: String,
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  lowStockThreshold: {
    type: Number,
    default: 10
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  images: [{
    url: String,
    alt: String,
    isPrimary: Boolean
  }],
  brand: String,
  tags: [String],
  specifications: {
    uz: mongoose.Schema.Types.Mixed,
    ru: mongoose.Schema.Types.Mixed,
    en: mongoose.Schema.Types.Mixed
  },
  weight: Number,
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    unit: {
      type: String,
      enum: ['cm', 'inch'],
      default: 'cm'
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isNewProduct: {
    type: Boolean,
    default: false
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  views: {
    type: Number,
    default: 0
  },
  sales: {
    type: Number,
    default: 0
  },
  metaTitle: {
    uz: String,
    ru: String,
    en: String
  },
  metaDescription: {
    uz: String,
    ru: String,
    en: String
  }
}, {
  timestamps: true
});

// Indexes
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ price: 1 });
productSchema.index({ slug: 1 });

// Helper function to generate slug from text
function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    // Replace Cyrillic characters
    .replace(/а/g, 'a').replace(/б/g, 'b').replace(/в/g, 'v').replace(/г/g, 'g')
    .replace(/д/g, 'd').replace(/е/g, 'e').replace(/ё/g, 'yo').replace(/ж/g, 'zh')
    .replace(/з/g, 'z').replace(/и/g, 'i').replace(/й/g, 'y').replace(/к/g, 'k')
    .replace(/л/g, 'l').replace(/м/g, 'm').replace(/н/g, 'n').replace(/о/g, 'o')
    .replace(/п/g, 'p').replace(/р/g, 'r').replace(/с/g, 's').replace(/т/g, 't')
    .replace(/у/g, 'u').replace(/ф/g, 'f').replace(/х/g, 'h').replace(/ц/g, 'ts')
    .replace(/ч/g, 'ch').replace(/ш/g, 'sh').replace(/щ/g, 'sch').replace(/ъ/g, '')
    .replace(/ы/g, 'y').replace(/ь/g, '').replace(/э/g, 'e').replace(/ю/g, 'yu')
    .replace(/я/g, 'ya')
    // Replace Uzbek specific characters
    .replace(/ў/g, 'o').replace(/ғ/g, 'g').replace(/қ/g, 'q').replace(/ҳ/g, 'h')
    // Replace special characters with spaces
    .replace(/[^\w\s-]/g, ' ')
    // Replace multiple spaces with single dash
    .replace(/\s+/g, '-')
    // Replace multiple dashes with single dash
    .replace(/-+/g, '-')
    // Remove leading/trailing dashes
    .replace(/^-+|-+$/g, '');
}

// Pre-save hook to generate slug
productSchema.pre('save', async function(next) {
  // Only generate slug if it's not provided or if name has changed
  if (!this.slug || this.isModified('name')) {
    // Use English name first, fallback to Uzbek, then Russian
    const baseName = this.name.en || this.name.uz || this.name.ru;
    let slug = generateSlug(baseName);
    
    // Check if slug exists
    const existingProduct = await mongoose.model('Product').findOne({ 
      slug: slug,
      _id: { $ne: this._id } // Exclude current product if updating
    });
    
    if (existingProduct) {
      // If slug exists, add number suffix
      let counter = 1;
      let uniqueSlug = `${slug}-${counter}`;
      
      while (await mongoose.model('Product').findOne({ 
        slug: uniqueSlug,
        _id: { $ne: this._id }
      })) {
        counter++;
        uniqueSlug = `${slug}-${counter}`;
      }
      
      slug = uniqueSlug;
    }
    
    this.slug = slug;
  }
  
  next();
});

export default mongoose.model('Product', productSchema);
