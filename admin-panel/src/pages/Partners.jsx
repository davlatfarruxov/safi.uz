import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPartners, getPartnerStats, updatePartner, deletePartner } from '../redux/slices/partnerSlice';
import { Phone, MapPin, Trash2, Eye, MessageSquare } from 'lucide-react';

const Partners = () => {
  const dispatch = useDispatch();
  const { partners, stats, loading, error, totalPages, currentPage, total } = useSelector((state) => state.partners);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [page, setPage] = useState(1);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    dispatch(getPartners({ page, status: selectedStatus }));
    dispatch(getPartnerStats());
  }, [dispatch, page, selectedStatus]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await dispatch(updatePartner({ id, data: { status: newStatus } })).unwrap();
      dispatch(getPartners({ page, status: selectedStatus }));
      dispatch(getPartnerStats());
      // Success notification could be added here
    } catch (error) {
      console.error('Error updating partner:', error);
      alert('Xatolik yuz berdi: ' + (error.message || 'Noma\'lum xatolik'));
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Rostdan ham o\'chirmoqchimisiz? Bu amalni qaytarib bo\'lmaydi.')) {
      try {
        await dispatch(deletePartner(id)).unwrap();
        dispatch(getPartners({ page, status: selectedStatus }));
        dispatch(getPartnerStats());
        alert('Muvaffaqiyatli o\'chirildi');
      } catch (error) {
        console.error('Error deleting partner:', error);
        alert('Xatolik yuz berdi: ' + (error.message || 'Noma\'lum xatolik'));
      }
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      answered: 'bg-cyan-100 text-cyan-800',
      'in-progress': 'bg-purple-100 text-purple-800',
      completed: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    const labels = {
      new: 'Yangi',
      contacted: 'Bog\'landi',
      answered: 'Javob berildi',
      'in-progress': 'Jarayonda',
      completed: 'Yakunlandi',
      rejected: 'Rad etildi'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Hamkorlik so'rovlari</h1>
        <p className="text-gray-600 mt-2">Hamkorlik uchun yuborilgan arizalar</p>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
            <div className="text-sm text-gray-600">Jami so'rovlar</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">{stats.newRequests}</div>
            <div className="text-sm text-gray-600">Yangi so'rovlar</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-yellow-600">
              {stats.byStatus?.find(s => s._id === 'in-progress')?.count || 0}
            </div>
            <div className="text-sm text-gray-600">Jarayonda</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">
              {stats.byStatus?.find(s => s._id === 'completed')?.count || 0}
            </div>
            <div className="text-sm text-gray-600">Yakunlangan</div>
          </div>
        </div>
      )}

      {/* Filter */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-4">
          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Barcha statuslar</option>
            <option value="new">Yangi</option>
            <option value="contacted">Bog'landi</option>
            <option value="answered">Javob berildi</option>
            <option value="in-progress">Jarayonda</option>
            <option value="completed">Yakunlandi</option>
            <option value="rejected">Rad etildi</option>
          </select>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6">
          <div className="flex items-center gap-3">
            <div className="text-red-600">⚠️</div>
            <div>
              <p className="font-semibold text-red-900">Xatolik</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Partners List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Yuklanmoqda...</p>
          </div>
        ) : partners.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            So'rovlar topilmadi
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ism
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Telefon
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kompaniya
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sana
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amallar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {partners.map((partner) => (
                  <tr 
                    key={partner._id} 
                    className={`hover:bg-gray-50 ${partner.status === 'new' ? 'bg-blue-50' : ''}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-gray-900">
                          {partner.firstName} {partner.lastName}
                        </div>
                        {partner.message && (
                          <MessageSquare className="text-blue-500" size={14} title="Xabar bor" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a 
                        href={`tel:${partner.phone}`}
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-2"
                      >
                        <Phone className="text-gray-400" size={16} />
                        {partner.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{partner.companyName || '-'}</div>
                      <div className="text-xs text-gray-500">{partner.hotelType || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={partner.status}
                        onChange={(e) => handleStatusChange(partner._id, e.target.value)}
                        className="text-sm px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="new">Yangi</option>
                        <option value="contacted">Bog'landi</option>
                        <option value="answered">Javob berildi</option>
                        <option value="in-progress">Jarayonda</option>
                        <option value="completed">Yakunlandi</option>
                        <option value="rejected">Rad etildi</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(partner.createdAt).toLocaleDateString('uz-UZ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedPartner(partner)}
                          className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded transition-colors"
                          title="Ko'rish"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(partner._id)}
                          className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded transition-colors"
                          title="O'chirish"
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-700">
              Jami: {total} ta so'rov
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Oldingi
              </button>
              <span className="px-4 py-2">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Keyingi
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">So'rov tafsilotlari</h2>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Ism Familiya</label>
                  <p className="text-lg text-gray-900">
                    {selectedPartner.firstName} {selectedPartner.lastName}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">Telefon</label>
                  <a 
                    href={`tel:${selectedPartner.phone}`}
                    className="text-lg text-blue-600 hover:text-blue-800 flex items-center gap-2 mt-1"
                  >
                    <Phone size={20} /> {selectedPartner.phone}
                  </a>
                </div>

                {selectedPartner.address && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Manzil</label>
                    <p className="text-lg text-gray-900 flex items-center gap-2">
                      <MapPin size={20} /> {selectedPartner.address}
                    </p>
                  </div>
                )}

                {selectedPartner.companyName && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Kompaniya</label>
                    <p className="text-lg text-gray-900">{selectedPartner.companyName}</p>
                  </div>
                )}

                {selectedPartner.hotelType && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Mehmonxona turi</label>
                    <p className="text-lg text-gray-900">{selectedPartner.hotelType}</p>
                  </div>
                )}

                {selectedPartner.roomCount && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Xonalar soni</label>
                    <p className="text-lg text-gray-900">{selectedPartner.roomCount}</p>
                  </div>
                )}

                {selectedPartner.message && (
                  <div>
                    <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <MessageSquare size={16} />
                      Xabar
                    </label>
                    <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-900 whitespace-pre-wrap">{selectedPartner.message}</p>
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <div className="mt-2">
                    <select
                      value={selectedPartner.status}
                      onChange={(e) => setSelectedPartner({...selectedPartner, status: e.target.value})}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="new">Yangi</option>
                      <option value="contacted">Bog'landi</option>
                      <option value="answered">Javob berildi</option>
                      <option value="in-progress">Jarayonda</option>
                      <option value="completed">Yakunlandi</option>
                      <option value="rejected">Rad etildi</option>
                    </select>
                  </div>
                </div>

                {selectedPartner.notes && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Izohlar</label>
                    <div className="mt-2 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-gray-900 whitespace-pre-wrap">{selectedPartner.notes}</p>
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-500">Yuborilgan sana</label>
                  <p className="text-gray-900">
                    {new Date(selectedPartner.createdAt).toLocaleString('uz-UZ')}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="mb-4">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Izoh qo'shish</label>
                  <textarea
                    value={selectedPartner.notes || ''}
                    onChange={(e) => setSelectedPartner({...selectedPartner, notes: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Izoh yozing..."
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleStatusChange(selectedPartner._id, selectedPartner.status);
                      if (selectedPartner.notes !== (partners.find(p => p._id === selectedPartner._id)?.notes || '')) {
                        dispatch(updatePartner({ 
                          id: selectedPartner._id, 
                          data: { notes: selectedPartner.notes } 
                        }));
                      }
                      setSelectedPartner(null);
                    }}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Saqlash
                  </button>
                  <button
                    onClick={() => setSelectedPartner(null)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Bekor qilish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;
