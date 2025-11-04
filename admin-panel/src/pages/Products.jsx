import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProduct } from '../redux/slices/productSlice';
import { fetchCategories } from '../redux/slices/categorySlice';
import toast from 'react-hot-toast';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

export default function Products() {
  const dispatch = useDispatch();
  const { items: products, loading, pagination } = useSelector((state) => state.products);
  const { items: categories } = useSelector((state) => state.categories);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (categoryFilter) params.category = categoryFilter;
    dispatch(fetchProducts(params));
  }, [dispatch, search, categoryFilter]);

  const handleDelete = async (id) => {
    if (window.confirm('Mahsulotni o\'chirmoqchimisiz?')) {
      try {
        await dispatch(deleteProduct(id)).unwrap();
        toast.success('Mahsulot o\'chirildi');
      } catch (error) {
        toast.error('Xatolik yuz berdi');
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mahsulotlar</h1>
        <Link to="/products/new" className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Yangi Mahsulot
        </Link>
      </div>

      <div className="card mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Mahsulot qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="input-field w-64"
          >
            <option value="">Barcha kategoriyalar</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name.uz}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">Yuklanmoqda...</div>
      ) : (
        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Rasm</th>
                <th className="text-left py-3 px-4">Nomi</th>
                <th className="text-left py-3 px-4">Kategoriya</th>
                <th className="text-left py-3 px-4">Narx</th>
                <th className="text-left py-3 px-4">Stock</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-right py-3 px-4">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {product.images?.[0]?.url ? (
                      <img
                        src={product.images[0].url}
                        alt={product.name.uz}
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    )}
                  </td>
                  <td className="py-3 px-4 font-medium">{product.name.uz}</td>
                  <td className="py-3 px-4">{product.category?.name?.uz}</td>
                  <td className="py-3 px-4">${product.price}</td>
                  <td className="py-3 px-4">{product.stock}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        product.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {product.isActive ? 'Faol' : 'Nofaol'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/products/edit/${product._id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
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

          {products.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Mahsulotlar topilmadi
            </div>
          )}
        </div>
      )}

      {pagination.totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {[...Array(pagination.totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => dispatch(fetchProducts({ page: i + 1, search, category: categoryFilter }))}
              className={`px-4 py-2 rounded ${
                pagination.currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
