import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  companyName: {
    type: String,
    trim: true
  },
  hotelType: {
    type: String,
    trim: true
  },
  roomCount: {
    type: Number
  },
  message: {
    type: String,
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

export default mongoose.model('Partner', partnerSchema);
