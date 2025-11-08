import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  bulkUpdateProducts
} from '../controllers/productController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, adminOnly, createProduct);

router.post('/bulk-update', protect, adminOnly, bulkUpdateProducts);

router.route('/:id')
  .get(getProduct)
  .put(protect, adminOnly, updateProduct)
  .delete(protect, adminOnly, deleteProduct);

export default router;
