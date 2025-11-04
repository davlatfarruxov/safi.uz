import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs, deleteBlog } from '../redux/slices/blogSlice';
import toast from 'react-hot-toast';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { format } from 'date-fns';

export default function Blogs() {
  const dispatch = useDispatch();
  const { items: blogs, loading } = useSelector((state) => state.blogs);
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    dispatch(fetchBlogs({ category: categoryFilter }));
  }, [dispatch, categoryFilter]);

  const handleDelete = async (id) => {
    if (window.confirm('Blogni o\'chirmoqchimisiz?')) {
      try {
        await dispatch(deleteBlog(id)).unwrap();
        toast.success('Blog o\'chirildi');
      } catch (error) {
        toast.error('Xatolik yuz berdi');
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Blog Postlar</h1>
        <Link to="/blogs/new" className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Yangi Post
        </Link>
      </div>

      <div className="card mb-6">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="input-field w-64"
        >
          <option value="">Barcha kategoriyalar</option>
          <option value="trends">Trendlar</option>
          <option value="ecology">Ekologiya</option>
          <option value="products">Mahsulotlar</option>
          <option value="design">Dizayn</option>
          <option value="service">Xizmat</option>
          <option value="events">Hodisalar</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center py-12">Yuklanmoqda...</div>
      ) : (
        <div className="card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Sarlavha</th>
                <th className="text-left py-3 px-4">Kategoriya</th>
                <th className="text-left py-3 px-4">Muallif</th>
                <th className="text-left py-3 px-4">Sana</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-right py-3 px-4">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium">{blog.title.uz}</div>
                    {blog.isFeatured && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        Tanlangan
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">{blog.category}</td>
                  <td className="py-3 px-4">{blog.author?.username}</td>
                  <td className="py-3 px-4">
                    {format(new Date(blog.createdAt), 'dd.MM.yyyy')}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        blog.isPublished
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {blog.isPublished ? 'Nashr qilingan' : 'Qoralama'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/blogs/edit/${blog._id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog._id)}
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

          {blogs.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Blog postlar topilmadi
            </div>
          )}
        </div>
      )}
    </div>
  );
}
