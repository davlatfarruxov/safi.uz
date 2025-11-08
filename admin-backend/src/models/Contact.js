import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  hotelCompany: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'answered', 'in-progress', 'completed', 'rejected'],
    default: 'new'
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Contact', contactSchema);
