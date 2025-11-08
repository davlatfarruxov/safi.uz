import mongoose from 'mongoose';

const newProductRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'completed'],
    default: 'new'
  },
  notes: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

export default mongoose.model('NewProductRequest', newProductRequestSchema);
