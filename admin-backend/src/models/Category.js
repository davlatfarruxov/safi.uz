import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
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
  image: String,
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('Category', categorySchema);
