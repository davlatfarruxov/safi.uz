import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, clearError } from '../redux/slices/authSlice';
import toast from 'react-hot-toast';
import { LogIn } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Iltimos, barcha maydonlarni to\'ldiring');
      return;
    }
    dispatch(login({ email, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#084b25] to-[#0a5c2e]">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#084b25] rounded-full mb-4">
            <LogIn className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Safi Admin</h1>
          <p className="text-gray-600 mt-2">Admin panelga kirish</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parol
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#084b25] text-white py-3 rounded-lg hover:bg-[#0a5c2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Yuklanmoqda...' : 'Kirish'}
          </button>
        </form>
      </div>
    </div>
  );
}
