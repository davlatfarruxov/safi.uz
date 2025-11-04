import express from 'express';
import * as contactController from '../controllers/contactController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// Public route - anyone can submit contact request
router.post('/', contactController.createContact);

// Protected routes - admin only
router.get('/', protect, adminOnly, contactController.getAllContacts);
router.get('/stats', protect, adminOnly, contactController.getContactStats);
router.get('/:id', protect, adminOnly, contactController.getContact);
router.put('/:id', protect, adminOnly, contactController.updateContact);
router.delete('/:id', protect, adminOnly, contactController.deleteContact);

export default router;
