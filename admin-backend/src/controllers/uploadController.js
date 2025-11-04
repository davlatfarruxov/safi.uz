import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Uploads papkasini yaratish
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer konfiguratsiyasi
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Faqat rasm fayllarini qabul qilish
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Faqat rasm fayllari qabul qilinadi!'), false);
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Bitta rasm yuklash
export const uploadSingle = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Fayl yuklanmadi' });
    }

    const fileUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({
      message: 'Fayl muvaffaqiyatli yuklandi',
      url: fileUrl,
      filename: req.file.filename
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Faylni yuklashda xatolik', error: error.message });
  }
};

// Ko'p rasm yuklash
export const uploadMultiple = (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'Fayllar yuklanmadi' });
    }

    const fileUrls = req.files.map(file => ({
      url: `/uploads/${file.filename}`,
      filename: file.filename
    }));

    res.status(200).json({
      message: 'Fayllar muvaffaqiyatli yuklandi',
      files: fileUrls
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Fayllarni yuklashda xatolik', error: error.message });
  }
};

// Faylni o'chirish
export const deleteFile = (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(uploadsDir, filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.status(200).json({ message: 'Fayl o\'chirildi' });
    } else {
      res.status(404).json({ message: 'Fayl topilmadi' });
    }
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Faylni o\'chirishda xatolik', error: error.message });
  }
};
