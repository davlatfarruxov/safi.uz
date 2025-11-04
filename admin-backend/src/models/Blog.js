import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    uz: { type: String, required: true },
    ru: { type: String, required: true },
    en: { type: String, required: true }
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    uz: { type: String, required: true },
    ru: { type: String, required: true },
    en: { type: String, required: true }
  },
  excerpt: {
    uz: String,
    ru: String,
    en: String
  },
  featuredImage: String,
  category: {
    type: String,
    enum: ['trends', 'ecology', 'products', 'design', 'service', 'events'],
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
  tags: [String],
  isFeatured: {
    type: Boolean,
    default: false
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: Date,
  views: {
    type: Number,
    default: 0
  },
  readTime: {
    type: Number,
    default: 5
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

export default mongoose.model('Blog', blogSchema);
