import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createBlog, updateBlog, fetchBlog } from '../redux/slices/blogSlice';
import toast from 'react-hot-toast';
import { ArrowLeft, Upload } from 'lucide-react';
import api from '../config/api';

export default function BlogForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentBlog } = useSelector((state) => state.blogs);

  const [formData, setFormData] = useState({
    title: { uz: '', ru: '', en: '' },
    content: { uz: '', ru: '', en: '' },
    excerpt: { uz: '', ru: '', en: '' },
    category: 'trends',
    tags: [],
    featuredImage: '',
    isFeatured: false,
    isPublished: false,
    readTime: 5,
  });

  const [tagInput, setTagInput] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchBlog(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && currentBlog) {
      setFormData({
        title: currentBlog.title,
        content: currentBlog.content,
        excerpt: currentBlog.excerpt || { uz: '', ru: '', en: '' },
        category: currentBlog.category,
        tags: currentBlog.tags || [],
        featuredImage: currentBlog.featuredImage || '',
        isFeatured: currentBlog.isFeatured,
        isPublished: currentBlog.isPublished,
        readTime: currentBlog.readTime,
      });
    }
  }, [id, currentBlog]);

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
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('image', file);

    try {
      const { data } = await api.post('/upload/single', formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFormData((prev) => ({ ...prev, featuredImage: data.url }));
      toast.success('Rasm yuklandi');
    } catch (error) {
      toast.error('Rasm yuklashda xatolik');
    } finally {
      setUploading(false);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      ...formData,
      slug: formData.title.en.toLowerCase().replace(/\s+/g, '-'),
    };

    try {
      if (id) {
        await dispatch(updateBlog({ id, blogData })).unwrap();
        toast.success('Blog yangilandi');
      } else {
        await dispatch(createBlog(blogData)).unwrap();
        toast.success('Blog qo\'shildi');
      }
      navigate('/blogs');
    } catch (error) {
      toast.error('Xatolik yuz berdi');
    }
  };

  return (
    <div>
      <button onClick={() => navigate('/blogs')} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft size={20} />
        Orqaga
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {id ? 'Blogni Tahrirlash' : 'Yangi Blog Post'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Asosiy Ma'lumotlar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Sarlavha (O'zbek)</label>
              <input
                type="text"
                value={formData.title.uz}
                onChange={(e) => handleMultiLangChange('title', 'uz', e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Sarlavha (Русский)</label>
              <input
                type="text"
                value={formData.title.ru}
                onChange={(e) => handleMultiLangChange('title', 'ru', e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Sarlavha (English)</label>
              <input
                type="text"
                value={formData.title.en}
                onChange={(e) => handleMultiLangChange('title', 'en', e.target.value)}
                className="input-field"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Kontent (O'zbek)</label>
              <textarea
                value={formData.content.uz}
                onChange={(e) => handleMultiLangChange('content', 'uz', e.target.value)}
                className="input-field"
                rows="10"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Kontent (Русский)</label>
              <textarea
                value={formData.content.ru}
                onChange={(e) => handleMultiLangChange('content', 'ru', e.target.value)}
                className="input-field"
                rows="10"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Kontent (English)</label>
              <textarea
                value={formData.content.en}
                onChange={(e) => handleMultiLangChange('content', 'en', e.target.value)}
                className="input-field"
                rows="10"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Kategoriya</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="input-field"
                required
              >
                <option value="trends">Trendlar</option>
                <option value="ecology">Ekologiya</option>
                <option value="products">Mahsulotlar</option>
                <option value="design">Dizayn</option>
                <option value="service">Xizmat</option>
                <option value="events">Hodisalar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">O'qish vaqti (daqiqa)</label>
              <input
                type="number"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) })}
                className="input-field"
                min="1"
              />
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Asosiy Rasm</h3>
          <div className="mb-4">
            <label className="btn-secondary cursor-pointer inline-flex items-center gap-2">
              <Upload size={18} />
              {uploading ? 'Yuklanmoqda...' : 'Rasm yuklash'}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>
          {formData.featuredImage && (
            <img src={formData.featuredImage} alt="Featured" className="w-64 h-40 object-cover rounded" />
          )}
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Teglar</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              className="input-field flex-1"
              placeholder="Teg kiriting..."
            />
            <button type="button" onClick={handleAddTag} className="btn-secondary">
              Qo'shish
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                {tag}
                <button type="button" onClick={() => handleRemoveTag(tag)} className="hover:text-blue-900">
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Sozlamalar</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
              />
              <span>Tanlangan</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.isPublished}
                onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
              />
              <span>Nashr qilish</span>
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <button type="submit" className="btn-primary">
            {id ? 'Yangilash' : 'Qo\'shish'}
          </button>
          <button type="button" onClick={() => navigate('/blogs')} className="btn-secondary">
            Bekor qilish
          </button>
        </div>
      </form>
    </div>
  );
}
