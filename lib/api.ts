import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types
export interface Product {
  _id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  price: number;
  comparePrice?: number;
  stock: number;
  category: Category;
  images: Array<{
    url: string;
    alt?: string;
    isPrimary?: boolean;
  }>;
  brand?: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  isNewProduct: boolean;
  rating: {
    average: number;
    count: number;
  };
  views: number;
  sales: number;
  slug: string;
  sku?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  slug: string;
  description?: {
    uz: string;
    ru: string;
    en: string;
  };
  image?: string;
  parentCategory?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Blog {
  _id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  slug: string;
  content: {
    uz: string;
    ru: string;
    en: string;
  };
  excerpt?: {
    uz: string;
    ru: string;
    en: string;
  };
  featuredImage?: string;
  category: string;
  author: {
    _id: string;
    username: string;
  };
  tags: string[];
  isFeatured: boolean;
  isPublished: boolean;
  publishedAt?: string;
  views: number;
  readTime: number;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  _id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
  items: Array<{
    product: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
  }>;
  shippingAddress: {
    address: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  subtotal: number;
  shippingCost: number;
  tax: number;
  discount: number;
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod: 'cash' | 'card' | 'bank-transfer' | 'online';
  notes?: string;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

// API Functions

// Products
export const getProducts = async (params?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  isActive?: boolean;
  isFeatured?: boolean;
  isNewProduct?: boolean;
}) => {
  const { data } = await api.get('/products', { params });
  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const getProductBySlug = async (slug: string) => {
  const { data } = await api.get(`/products?slug=${slug}`);
  return data.products[0];
};

export const getFeaturedProducts = async (limit = 8) => {
  const { data } = await api.get('/products', { 
    params: { isFeatured: true, isActive: true, limit } 
  });
  return data;
};

export const getNewProducts = async (limit = 8) => {
  const { data } = await api.get('/products', { 
    params: { isNewProduct: true, isActive: true, limit } 
  });
  return data;
};

export const getProductsByCategory = async (categoryId: string, limit?: number) => {
  const { data } = await api.get('/products', { 
    params: { category: categoryId, isActive: true, limit } 
  });
  return data;
};

export const searchProducts = async (query: string, limit = 20) => {
  const { data } = await api.get('/products', { 
    params: { search: query, isActive: true, limit } 
  });
  return data;
};

// Categories
export const getCategories = async () => {
  const { data } = await api.get('/categories');
  return data.filter((cat: Category) => cat.isActive);
};

export const getCategory = async (id: string) => {
  const { data } = await api.get(`/categories/${id}`);
  return data;
};

export const getCategoryBySlug = async (slug: string) => {
  const { data } = await api.get('/categories');
  return data.find((cat: Category) => cat.slug === slug && cat.isActive);
};

export const getMainCategories = async () => {
  const { data } = await api.get('/categories');
  return data.filter((cat: Category) => cat.isActive && !cat.parentCategory);
};

export const getSubCategories = async (parentId: string) => {
  const { data } = await api.get('/categories');
  return data.filter((cat: Category) => cat.isActive && cat.parentCategory === parentId);
};

// Blogs
export const getBlogs = async (params?: {
  page?: number;
  limit?: number;
  category?: string;
  isPublished?: boolean;
}) => {
  const { data } = await api.get('/blogs', { 
    params: { ...params, isPublished: true } 
  });
  return data;
};

export const getBlog = async (id: string) => {
  const { data } = await api.get(`/blogs/${id}`);
  return data;
};

export const getBlogBySlug = async (slug: string) => {
  const { data } = await api.get('/blogs');
  return data.blogs.find((blog: Blog) => blog.slug === slug && blog.isPublished);
};

export const getFeaturedBlogs = async (limit = 3) => {
  const { data } = await api.get('/blogs', { 
    params: { isFeatured: true, isPublished: true, limit } 
  });
  return data;
};

export const getBlogsByCategory = async (category: string, limit?: number) => {
  const { data } = await api.get('/blogs', { 
    params: { category, isPublished: true, limit } 
  });
  return data;
};

// Orders (for customer order creation)
export const createOrder = async (orderData: Partial<Order>) => {
  const { data } = await api.post('/orders/public', orderData);
  return data;
};

export const getOrderByNumber = async (orderNumber: string) => {
  const { data } = await api.get(`/orders?orderNumber=${orderNumber}`);
  return data.orders[0];
};

export const getOrdersByPhone = async (phone: string) => {
  const { data } = await api.get('/orders/public/by-phone', { params: { phone } });
  return data.orders;
};

// Contact/Partnership forms
export const submitPartnershipForm = async (formData: {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  companyName: string;
  hotelType: string;
  roomCount: string;
  message: string;
}) => {
  // Bu yerda email service yoki database ga saqlash kerak
  // Hozircha console.log qilamiz
  console.log('Partnership form submitted:', formData);
  return { success: true, message: 'Form submitted successfully' };
};

export const submitContactForm = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  hotelCompany: string;
  phone: string;
  help: string;
}) => {
  // Bu yerda email service yoki database ga saqlash kerak
  console.log('Contact form submitted:', formData);
  return { success: true, message: 'Form submitted successfully' };
};

// Newsletter subscription
export const subscribeNewsletter = async (email: string) => {
  // Bu yerda newsletter service ga qo'shish kerak
  console.log('Newsletter subscription:', email);
  return { success: true, message: 'Subscribed successfully' };
};

// New Product Requests
export const createNewProductRequest = async (requestData: {
  name: string;
  phone: string;
}) => {
  const { data } = await api.post('/new-product-requests', requestData);
  return data;
};

// Statistics (public data)
export const getPublicStats = async () => {
  try {
    const [products, categories, blogs] = await Promise.all([
      getProducts({ limit: 1 }),
      getCategories(),
      getBlogs({ limit: 1 })
    ]);

    return {
      totalProducts: products.totalProducts || 0,
      totalCategories: categories.length || 0,
      totalBlogs: blogs.totalBlogs || 0,
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return {
      totalProducts: 0,
      totalCategories: 0,
      totalBlogs: 0,
    };
  }
};

export default api;