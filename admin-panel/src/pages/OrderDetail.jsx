import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchOrder, updateOrderStatus } from '../redux/slices/orderSlice';
import toast from 'react-hot-toast';
import { ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

export default function OrderDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentOrder } = useSelector((state) => state.orders);
  const [status, setStatus] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentOrder) {
      setStatus(currentOrder.status);
    }
  }, [currentOrder]);

  const handleUpdateStatus = async () => {
    try {
      await dispatch(updateOrderStatus({ id, status, note })).unwrap();
      toast.success('Status yangilandi');
      setNote('');
    } catch (error) {
      toast.error('Xatolik yuz berdi');
    }
  };

  if (!currentOrder) {
    return <div className="text-center py-12">Yuklanmoqda...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate('/orders')} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft size={20} />
        Orqaga
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Buyurtma #{currentOrder.orderNumber}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Mahsulotlar</h3>
            <div className="space-y-4">
              {currentOrder.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 pb-4 border-b last:border-0">
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-600">
                      ${item.price} × {item.quantity}
                    </div>
                  </div>
                  <div className="font-medium">${item.total}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t space-y-2">
              <div className="flex justify-between">
                <span>Oraliq jami:</span>
                <span>${currentOrder.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Yetkazib berish:</span>
                <span>${currentOrder.shippingCost}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Jami:</span>
                <span>${currentOrder.total}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Status Tarixi</h3>
            <div className="space-y-3">
              {currentOrder.statusHistory?.map((history, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-sm text-gray-600 w-32">
                    {format(new Date(history.date), 'dd.MM.yyyy HH:mm')}
                  </div>
                  <div>
                    <div className="font-medium">{history.status}</div>
                    {history.note && <div className="text-sm text-gray-600">{history.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Mijoz Ma'lumotlari</h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-gray-600">Ism:</div>
                <div className="font-medium">{currentOrder.customer.name}</div>
              </div>
              <div>
                <div className="text-gray-600">Email:</div>
                <div className="font-medium">{currentOrder.customer.email}</div>
              </div>
              <div>
                <div className="text-gray-600">Telefon:</div>
                <div className="font-medium">{currentOrder.customer.phone}</div>
              </div>
              {currentOrder.customer.company && (
                <div>
                  <div className="text-gray-600">Kompaniya:</div>
                  <div className="font-medium">{currentOrder.customer.company}</div>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Yetkazib Berish</h3>
            <div className="text-sm">
              {currentOrder.shippingAddress?.address && (
                <div>{currentOrder.shippingAddress.address}</div>
              )}
              {currentOrder.shippingAddress?.city && (
                <div>{currentOrder.shippingAddress.city}</div>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Statusni Yangilash</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="input-field"
                >
                  <option value="pending">Kutilmoqda</option>
                  <option value="confirmed">Tasdiqlangan</option>
                  <option value="processing">Jarayonda</option>
                  <option value="shipped">Yuborilgan</option>
                  <option value="delivered">Yetkazilgan</option>
                  <option value="cancelled">Bekor qilingan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Izoh</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="input-field"
                  rows="3"
                  placeholder="Izoh qo'shing..."
                />
              </div>
              <button onClick={handleUpdateStatus} className="btn-primary w-full">
                Yangilash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
