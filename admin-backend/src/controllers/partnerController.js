import Partner from '../models/Partner.js';

// Create new partner request
export const createPartner = async (req, res) => {
  try {
    const partner = new Partner(req.body);
    await partner.save();
    
    res.status(201).json({
      success: true,
      message: 'Partner request submitted successfully',
      data: partner
    });
  } catch (error) {
    console.error('Error creating partner:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting partner request',
      error: error.message
    });
  }
};

// Get all partners
export const getAllPartners = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (status) {
      query.status = status;
    }
    
    const partners = await Partner.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const count = await Partner.countDocuments(query);
    
    res.json({
      success: true,
      data: partners,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    console.error('Error fetching partners:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching partners',
      error: error.message
    });
  }
};

// Get single partner
export const getPartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    
    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }
    
    res.json({
      success: true,
      data: partner
    });
  } catch (error) {
    console.error('Error fetching partner:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching partner',
      error: error.message
    });
  }
};

// Update partner status
export const updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Partner updated successfully',
      data: partner
    });
  } catch (error) {
    console.error('Error updating partner:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating partner',
      error: error.message
    });
  }
};

// Delete partner
export const deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);
    
    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Partner deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting partner:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting partner',
      error: error.message
    });
  }
};

// Get partner statistics
export const getPartnerStats = async (req, res) => {
  try {
    const stats = await Partner.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    
    const total = await Partner.countDocuments();
    const newRequests = await Partner.countDocuments({ status: 'new' });
    
    res.json({
      success: true,
      data: {
        total,
        newRequests,
        byStatus: stats
      }
    });
  } catch (error) {
    console.error('Error fetching partner stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching partner statistics',
      error: error.message
    });
  }
};
