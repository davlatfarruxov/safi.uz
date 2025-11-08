import express from 'express';
import { upload, uploadSingle, uploadMultiple, deleteFile } from '../controllers/uploadController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Bitta rasm yuklash
router.post('/single', protect, upload.single('image'), uploadSingle);

// Ko'p rasm yuklash
router.post('/multiple', protect, upload.array('images', 10), uploadMultiple);

// Faylni o'chirish
router.delete('/:filename', protect, deleteFile);

export default router;
