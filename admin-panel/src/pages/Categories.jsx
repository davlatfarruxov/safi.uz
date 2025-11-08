import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, createCategory, updateCategory, deleteCategory } from '../redux/slices/categorySlice';
import toast from 'react-hot-toast';
import { Plus, Edit, Trash2, X, Upload, Image as ImageIcon } from 'lucide-react';
import api from '../config/api';

export default function Categories() {
  const dispatch = useDispatch();
  const { items: categories, loading } = useSelector((state) => state.categories);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: { uz: '', ru: '', en: '' },
    slug: '',
    description: { uz: '', ru: '', en: '' },
    image: '',
    isActive: true,
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await dispatch(updateCategory({ id: editingId, categoryData: formData })).unwrap();
        toast.success('Kategoriya yangilandi');
      } else {
        await dispatch(createCategory(formData)).unwrap();
        toast.success('Kategoriya qo\'shildi');
      }
      resetForm();
    } catch (error) {
      toast.error('Xatolik yuz berdi');
    }
  };

  const handleEdit = (category) => {
    setEditingId(category._id);
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || { uz: '', ru: '', en: '' },
      image: category.image || '',
      isActive: category.isActive,
    });
    setShowModal(true);
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
      setFormData((prev) => ({ ...prev, image: data.url }));
      toast.success('Rasm yuklandi');
    } catch (error) {
      toast.error('Rasm yuklashda xatolik');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Kategoriyani o\'chirmoqchimisiz?')) {
      try {
        await dispatch(deleteCategory(id)).unwrap();
        toast.success('Kategoriya o\'chirildi');
      } catch (error) {
        toast.error('Xatolik yuz berdi');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: { uz: '', ru: '', en: '' },
      slug: '',
      description: { uz: '', ru: '', en: '' },
      image: '',
      isActive: true,
    });
    setEditingId(null);
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Kategoriyalar</h1>
        <button onClick={() => setShowModal(true)} className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Yangi Kategoriya
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12">Yuklanmoqda...</div>
      ) : (
        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Rasm</th>
                <th className="text-left py-3 px-4">Nomi (UZ)</th>
                <th className="text-left py-3 px-4">Nomi (RU)</th>
                <th className="text-left py-3 px-4">Nomi (EN)</th>
                <th className="text-left py-3 px-4">Slug</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-right py-3 px-4">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.name.uz}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                        <ImageIcon size={24} className="text-gray-400" />
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 font-medium">{category.name.uz}</td>
                  <td className="py-3 px-4">{category.name.ru}</td>
                  <td className="py-3 px-4">{category.name.en}</td>
                  <td className="py-3 px-4 text-gray-600">{category.slug}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        category.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {category.isActive ? 'Faol' : 'Nofaol'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(category)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(category._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {editingId ? 'Kategoriyani Tahrirlash' : 'Yangi Kategoriya'}
              </h2>
              <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nomi (O'zbek)</label>
                  <input
                    type="text"
                    value={formData.name.uz}
                    onChange={(e) =>
                      setFormData({ ...formData, name: { ...formData.name, uz: e.target.value } })
                    }
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nomi (Русский)</label>
                  <input
                    type="text"
                    value={formData.name.ru}
                    onChange={(e) =>
                      setFormData({ ...formData, name: { ...formData.name, ru: e.target.value } })
                    }
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nomi (English)</label>
                  <input
                    type="text"
                    value={formData.name.en}
                    onChange={(e) =>
                      setFormData({ ...formData, name: { ...formData.name, en: e.target.value } })
                    }
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="input-field"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tavsif (O'zbek)</label>
                  <textarea
                    value={formData.description.uz}
                    onChange={(e) =>
                      setFormData({ ...formData, description: { ...formData.description, uz: e.target.value } })
                    }
                    className="input-field"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tavsif (Русский)</label>
                  <textarea
                    value={formData.description.ru}
                    onChange={(e) =>
                      setFormData({ ...formData, description: { ...formData.description, ru: e.target.value } })
                    }
                    className="input-field"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tavsif (English)</label>
                  <textarea
                    value={formData.description.en}
                    onChange={(e) =>
                      setFormData({ ...formData, description: { ...formData.description, en: e.target.value } })
                    }
                    className="input-field"
                    rows="3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Kategoriya Rasmi</label>
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
                {formData.image && (
                  <div className="relative inline-block">
                    <img src={formData.image} alt="Category" className="w-32 h-32 object-cover rounded" />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '' })}
                      className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  />
                  <span>Faol</span>
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <button type="submit" className="btn-primary">
                  {editingId ? 'Yangilash' : 'Qo\'shish'}
                </button>
                <button type="button" onClick={resetForm} className="btn-secondary">
                  Bekor qilish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
