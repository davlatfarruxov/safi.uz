import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../redux/slices/orderSlice';
import { Eye, Search } from 'lucide-react';
import { format } from 'date-fns';

export default function Orders() {
  const dispatch = useDispatch();
  const { items: orders, loading, pagination } = useSelector((state) => state.orders);
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    dispatch(fetchOrders({ status: statusFilter }));
  }, [dispatch, statusFilter]);

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      processing: 'bg-purple-100 text-purple-800',
      shipped: 'bg-indigo-100 text-indigo-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status) => {
    const texts = {
      pending: 'Kutilmoqda',
      confirmed: 'Tasdiqlangan',
      processing: 'Jarayonda',
      shipped: 'Yuborilgan',
      delivered: 'Yetkazilgan',
      cancelled: 'Bekor qilingan',
    };
    return texts[status] || status;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Buyurtmalar</h1>

      <div className="card mb-6">
        <div className="flex gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input-field w-64"
          >
            <option value="">Barcha statuslar</option>
            <option value="pending">Kutilmoqda</option>
            <option value="confirmed">Tasdiqlangan</option>
            <option value="processing">Jarayonda</option>
            <option value="shipped">Yuborilgan</option>
            <option value="delivered">Yetkazilgan</option>
            <option value="cancelled">Bekor qilingan</option>
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
                <th className="text-left py-3 px-4">Buyurtma #</th>
                <th className="text-left py-3 px-4">Mijoz</th>
                <th className="text-left py-3 px-4">Sana</th>
                <th className="text-left py-3 px-4">Jami</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">To'lov</th>
                <th className="text-right py-3 px-4">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{order.orderNumber}</td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium">{order.customer.name}</div>
                      <div className="text-sm text-gray-600">{order.customer.phone}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {format(new Date(order.createdAt), 'dd.MM.yyyy HH:mm')}
                  </td>
                  <td className="py-3 px-4 font-medium">${order.total}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(order.paymentStatus)}`}>
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end">
                      <Link
                        to={`/orders/${order._id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <Eye size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Buyurtmalar topilmadi
            </div>
          )}
        </div>
      )}
    </div>
  );
}
