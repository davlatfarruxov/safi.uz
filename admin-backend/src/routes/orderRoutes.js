import express from 'express';
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrderStatus,
  deleteOrder,
  getOrderStats,
  getOrdersByPhone
} from '../controllers/orderController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/public', createOrder);
router.get('/public/by-phone', getOrdersByPhone);

// Admin routes
router.get('/stats', protect, adminOnly, getOrderStats);

router.route('/')
  .get(protect, adminOnly, getOrders)
  .post(protect, adminOnly, createOrder);

router.route('/:id')
  .get(protect, adminOnly, getOrder)
  .put(protect, adminOnly, updateOrderStatus)
  .delete(protect, adminOnly, deleteOrder);

export default router;
