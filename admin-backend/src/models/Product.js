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

productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ price: 1 });

export default mongoose.model('Product', productSchema);
