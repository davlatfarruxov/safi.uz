import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.isActive !== undefined) filter.isActive = req.query.isActive === 'true';
    if (req.query.search) {
      filter.$or = [
        { 'name.uz': { $regex: req.query.search, $options: 'i' } },
        { 'name.ru': { $regex: req.query.search, $options: 'i' } },
        { 'name.en': { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const products = await Product.find(filter)
      .populate('category')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments(filter);

    res.json({
      products,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalProducts: total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error('Create product error:', error);
    
    // Slug duplicate error
    if (error.code === 11000 && error.keyPattern?.slug) {
      return res.status(400).json({ 
        message: 'Slug allaqachon mavjud. Mahsulot nomi o\'zgartirilsin yoki qayta urinib ko\'ring.' 
      });
    }
    
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      Object.assign(product, req.body);
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const bulkUpdateProducts = async (req, res) => {
  try {
    const { ids, updates } = req.body;
    await Product.updateMany(
      { _id: { $in: ids } },
      { $set: updates }
    );
    res.json({ message: 'Products updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
