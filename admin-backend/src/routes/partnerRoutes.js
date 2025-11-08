import express from 'express';
import * as partnerController from '../controllers/partnerController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = express.Router();

// Public route - anyone can submit partner request
router.post('/', partnerController.createPartner);

// Protected routes - admin only
router.get('/', protect, adminOnly, partnerController.getAllPartners);
router.get('/stats', protect, adminOnly, partnerController.getPartnerStats);
router.get('/:id', protect, adminOnly, partnerController.getPartner);
router.put('/:id', protect, adminOnly, partnerController.updatePartner);
router.delete('/:id', protect, adminOnly, partnerController.deletePartner);

export default router;
