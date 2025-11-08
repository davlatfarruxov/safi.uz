import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createProduct, updateProduct, fetchProduct } from '../redux/slices/productSlice';
import { fetchCategories } from '../redux/slices/categorySlice';
import toast from 'react-hot-toast';
import { ArrowLeft, Upload } from 'lucide-react';
import api from '../config/api';

export default function ProductForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentProduct } = useSelector((state) => state.products);
  const { items: categories } = useSelector((state) => state.categories);

  const [formData, setFormData] = useState({
    name: { uz: '', ru: '', en: '' },
    description: { uz: '', ru: '', en: '' },
    price: '',
    stock: '',
    category: '',
    sku: '',
    isActive: true,
    isFeatured: false,
    isNewProduct: false,
  });

  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && currentProduct) {
      setFormData({
        name: currentProduct.name,
        description: currentProduct.description || { uz: '', ru: '', en: '' },
        price: currentProduct.price,
        stock: currentProduct.stock,
        category: currentProduct.category?._id || '',
        sku: currentProduct.sku || '',
        isActive: currentProduct.isActive,
        isFeatured: currentProduct.isFeatured,
        isNewProduct: currentProduct.isNewProduct,
      });
      setImages(currentProduct.images || []);
    }
  }, [id, currentProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleMultiLangChange = (field, lang, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [lang]: value,
      },
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    try {
      const { data } = await api.post('/upload/multiple', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setImages((prev) => [...prev, ...data.files.map(f => ({ url: f.url, isPrimary: false }))]);
      toast.success('Rasmlar yuklandi');
    } catch (error) {
      toast.error('Rasm yuklashda xatolik');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...formData,
      slug: formData.name.en.toLowerCase().replace(/\s+/g, '-'),
      images,
    };

    try {
      if (id) {
        await dispatch(updateProduct({ id, productData })).unwrap();
        toast.success('Mahsulot yangilandi');
      } else {
        await dispatch(createProduct(productData)).unwrap();
        toast.success('Mahsulot qo\'shildi');
      }
      navigate('/products');
    } catch (error) {
      toast.error('Xatolik yuz berdi');
    }
  };

  return (
    <div>
      <button onClick={() => navigate('/products')} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft size={20} />
        Orqaga
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {id ? 'Mahsulotni Tahrirlash' : 'Yangi Mahsulot'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Asosiy Ma'lumotlar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nomi (O'zbek)</label>
              <input
                type="text"
                value={formData.name.uz}
                onChange={(e) => handleMultiLangChange('name', 'uz', e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nomi (Русский)</label>
              <input
                type="text"
                value={formData.name.ru}
                onChange={(e) => handleMultiLangChange('name', 'ru', e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nomi (English)</label>
              <input
                type="text"
                value={formData.name.en}
                onChange={(e) => handleMultiLangChange('name', 'en', e.target.value)}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Tavsif (O'zbek)</label>
              <textarea
                value={formData.description.uz}
                onChange={(e) => handleMultiLangChange('description', 'uz', e.target.value)}
                className="input-field"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tavsif (Русский)</label>
              <textarea
                value={formData.description.ru}
                onChange={(e) => handleMultiLangChange('description', 'ru', e.target.value)}
                className="input-field"
                rows="3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tavsif (English)</label>
              <textarea
                value={formData.description.en}
                onChange={(e) => handleMultiLangChange('description', 'en', e.target.value)}
                className="input-field"
                rows="3"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Narx ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="input-field"
                required
                min="0"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="input-field"
                required
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">SKU</label>
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Kategoriya</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Tanlang</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name.uz}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Rasmlar</h3>
          <div className="mb-4">
            <label className="btn-secondary cursor-pointer inline-flex items-center gap-2">
              <Upload size={18} />
              {uploading ? 'Yuklanmoqda...' : 'Rasm yuklash'}
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img src={img.url} alt="" className="w-full h-32 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => setImages(images.filter((_, i) => i !== index))}
                  className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Sozlamalar</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              <span>Faol</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleChange}
              />
              <span>Tanlangan</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isNewProduct"
                checked={formData.isNewProduct}
                onChange={handleChange}
              />
              <span>Yangi</span>
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <button type="submit" className="btn-primary">
            {id ? 'Yangilash' : 'Qo\'shish'}
          </button>
          <button type="button" onClick={() => navigate('/products')} className="btn-secondary">
            Bekor qilish
          </button>
        </div>
      </form>
    </div>
  );
}
