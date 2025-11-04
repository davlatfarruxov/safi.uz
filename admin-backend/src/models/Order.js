import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: String
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    total: Number
  }],
  shippingAddress: {
    address: String,
    city: String,
    region: String,
    postalCode: String,
    country: { type: String, default: 'Uzbekistan' }
  },
  subtotal: {
    type: Number,
    required: true
  },
  shippingCost: {
    type: Number,
    default: 0
  },
  tax: {
    type: Number,
    default: 0
  },
  discount: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'bank-transfer', 'online'],
    default: 'cash'
  },
  notes: String,
  trackingNumber: String,
  statusHistory: [{
    status: String,
    date: { type: Date, default: Date.now },
    note: String
  }]
}, {
  timestamps: true
});

orderSchema.pre('validate', async function(next) {
  if (!this.orderNumber) {
    const count = await mongoose.model('Order').countDocuments();
    this.orderNumber = `ORD-${Date.now()}-${count + 1}`;
  }
  next();
});

export default mongoose.model('Order', orderSchema);
