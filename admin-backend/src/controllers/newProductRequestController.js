import NewProductRequest from '../models/NewProductRequest.js';

// Get all new product requests
export const getAllRequests = async (req, res) => {
  try {
    const requests = await NewProductRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get single request
export const getRequestById = async (req, res) => {
  try {
    const request = await NewProductRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create new request
export const createRequest = async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ message: 'Name and phone are required' });
    }

    const newRequest = new NewProductRequest({
      name,
      phone
    });

    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update request status
export const updateRequest = async (req, res) => {
  try {
    const { status, notes } = req.body;
    
    const request = await NewProductRequest.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true, runValidators: true }
    );

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete request
export const deleteRequest = async (req, res) => {
  try {
    const request = await NewProductRequest.findByIdAndDelete(req.params.id);
    
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.json({ message: 'Request deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
