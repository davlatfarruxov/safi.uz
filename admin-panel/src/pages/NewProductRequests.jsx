import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchNewProductRequests,
  updateNewProductRequest,
  deleteNewProductRequest,
} from '../redux/slices/newProductRequestSlice';

const NewProductRequests = () => {
  const dispatch = useDispatch();
  const { requests, loading } = useSelector((state) => state.newProductRequests);
  const [filter, setFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    dispatch(fetchNewProductRequests());
  }, [dispatch]);

  const filteredRequests = requests.filter((request) => {
    if (filter === 'all') return true;
    return request.status === filter;
  });

  const handleStatusChange = async (id, newStatus) => {
    await dispatch(updateNewProductRequest({ id, requestData: { status: newStatus } }));
    dispatch(fetchNewProductRequests());
  };

  const handleUpdateNotes = async (id) => {
    await dispatch(updateNewProductRequest({ id, requestData: { notes } }));
    setSelectedRequest(null);
    setNotes('');
    dispatch(fetchNewProductRequests());
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      await dispatch(deleteNewProductRequest(id));
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
    };
    return badges[status] || badges.new;
  };

  const getStatusText = (status) => {
    const texts = {
      new: 'New',
      contacted: 'Contacted',
      completed: 'Completed',
    };
    return texts[status] || status;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">New Product Requests</h1>
        <p className="text-gray-600">Manage customer requests for new products</p>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['all', 'new', 'contacted', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`${
                filter === status
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
            >
              {status}
              <span className="ml-2 py-0.5 px-2 rounded-full text-xs bg-gray-100">
                {status === 'all'
                  ? requests.length
                  : requests.filter((r) => r.status === status).length}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Requests Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRequests.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                  No requests found
                </td>
              </tr>
            ) : (
              filteredRequests.map((request) => (
                <tr key={request._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{request.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{request.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={request.status}
                      onChange={(e) => handleStatusChange(request._id, e.target.value)}
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusBadge(
                        request.status
                      )}`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(request.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 max-w-xs truncate">
                      {request.notes || '-'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => {
                        setSelectedRequest(request);
                        setNotes(request.notes || '');
                      }}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit Notes
                    </button>
                    <button
                      onClick={() => handleDelete(request._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Notes Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Notes</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Name:</strong> {selectedRequest.name}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Phone:</strong> {selectedRequest.phone}
              </p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add notes..."
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setSelectedRequest(null);
                  setNotes('');
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdateNotes(selectedRequest._id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProductRequests;
