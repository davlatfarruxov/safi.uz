import express from 'express';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Blog from '../models/Blog.js';

const router = express.Router();

router.get('/check', async (req, res) => {
  try {
    const productsCount = await Product.countDocuments();
    const categoriesCount = await Category.countDocuments();
    const blogsCount = await Blog.countDocuments();
    
    const sampleProduct = await Product.findOne().populate('category');
    const sampleCategory = await Category.findOne();
    
    res.json({
      status: 'OK',
      database: 'Connected',
      counts: {
        products: productsCount,
        categories: categoriesCount,
        blogs: blogsCount
      },
      samples: {
        product: sampleProduct,
        category: sampleCategory
      }
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'ERROR',
      message: error.message 
    });
  }
});

export default router;
