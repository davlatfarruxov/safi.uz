import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { 
  LayoutDashboard, 
  Package, 
  FolderTree, 
  ShoppingCart, 
  FileText, 
  LogOut,
  Menu,
  X,
  Users,
  MessageSquare
} from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/products', icon: Package, label: 'Mahsulotlar' },
    { path: '/categories', icon: FolderTree, label: 'Kategoriyalar' },
    { path: '/orders', icon: ShoppingCart, label: 'Buyurtmalar' },
    { path: '/blogs', icon: FileText, label: 'Blog' },
    { path: '/partners', icon: Users, label: 'Hamkorlar' },
    { path: '/contacts', icon: MessageSquare, label: 'Aloqa' },
    { path: '/new-product-requests', icon: Package, label: 'Yangi Mahsulot' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#084b25] text-white transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Safi Admin</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/10 rounded">
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors"
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{admin?.username}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <LogOut size={18} />
                Chiqish
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
