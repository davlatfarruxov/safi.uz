import express from 'express';
import * as newProductRequestController from '../controllers/newProductRequestController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// Public route - create request
router.post('/', newProductRequestController.createRequest);

// Admin routes
router.get('/', protect, adminOnly, newProductRequestController.getAllRequests);
router.get('/:id', protect, adminOnly, newProductRequestController.getRequestById);
router.put('/:id', protect, adminOnly, newProductRequestController.updateRequest);
router.delete('/:id', protect, adminOnly, newProductRequestController.deleteRequest);

export default router;
