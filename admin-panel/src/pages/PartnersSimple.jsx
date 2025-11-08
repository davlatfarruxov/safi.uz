import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPartners, getPartnerStats } from '../redux/slices/partnerSlice';

const PartnersSimple = () => {
  const dispatch = useDispatch();
  const { partners, stats, loading, error } = useSelector((state) => state.partners);

  useEffect(() => {
    console.log('Fetching partners...');
    dispatch(getPartners({ page: 1, limit: 10 }));
    dispatch(getPartnerStats());
  }, [dispatch]);

  console.log('Partners state:', { partners, stats, loading, error });

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hamkorlar</h1>
        <p>Yuklanmoqda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hamkorlar</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-bold">Xatolik:</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hamkorlar</h1>
      
      {stats && (
        <div className="mb-6 p-4 bg-blue-50 rounded">
          <p>Jami: {stats.total}</p>
          <p>Yangi: {stats.newRequests}</p>
        </div>
      )}

      <div className="bg-white rounded shadow">
        {partners && partners.length > 0 ? (
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">Ism</th>
                <th className="px-6 py-3 text-left">Telefon</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Sana</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner) => (
                <tr key={partner._id} className="border-t">
                  <td className="px-6 py-4">{partner.firstName}</td>
                  <td className="px-6 py-4">{partner.phone}</td>
                  <td className="px-6 py-4">{partner.status}</td>
                  <td className="px-6 py-4">
                    {new Date(partner.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-6 text-center text-gray-500">So'rovlar yo'q</p>
        )}
      </div>
    </div>
  );
};

export default PartnersSimple;
