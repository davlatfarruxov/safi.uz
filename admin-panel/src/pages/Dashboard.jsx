import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderStats } from '../redux/slices/orderSlice';
import { getPartnerStats } from '../redux/slices/partnerSlice';
import { Package, ShoppingCart, DollarSign, TrendingUp, Users, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { stats } = useSelector((state) => state.orders);
  const { stats: partnerStats } = useSelector((state) => state.partners);

  useEffect(() => {
    dispatch(fetchOrderStats());
    dispatch(getPartnerStats());
  }, [dispatch]);

  const statCards = [
    {
      title: 'Jami Buyurtmalar',
      value: stats?.totalOrders || 0,
      icon: ShoppingCart,
      color: 'bg-blue-500',
    },
    {
      title: 'Kutilayotgan',
      value: stats?.pendingOrders || 0,
      icon: Package,
      color: 'bg-yellow-500',
    },
    {
      title: 'Bajarilgan',
      value: stats?.completedOrders || 0,
      icon: TrendingUp,
      color: 'bg-green-500',
    },
    {
      title: 'Jami Daromad',
      value: `$${stats?.totalRevenue?.toLocaleString() || 0}`,
      icon: DollarSign,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

      {/* Partner Notifications */}
      {partnerStats && partnerStats.newRequests > 0 && (
        <Link to="/partners" className="block mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg hover:bg-blue-100 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-blue-900">
                  {partnerStats.newRequests} ta yangi hamkorlik so'rovi!
                </p>
                <p className="text-sm text-blue-700">
                  Ko'rish uchun bosing
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">So'nggi Buyurtmalar</h3>
          <p className="text-gray-600">Buyurtmalar ro'yxati...</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Mashhur Mahsulotlar</h3>
          <p className="text-gray-600">Mahsulotlar statistikasi...</p>
        </div>
      </div>
    </div>
  );
}
