import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      
      if (!token || token === 'undefined' || token === 'null') {
        return res.status(401).json({ message: 'Not authorized, invalid token' });
      }
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select('-password');
      
      if (!req.admin || !req.admin.isActive) {
        return res.status(401).json({ message: 'Not authorized, admin not found or inactive' });
      }
      
      next();
    } catch (error) {
      console.error('Auth error:', error.message);
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: 'Not authorized, invalid token format' });
      }
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Not authorized, token expired' });
      }
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

export const adminOnly = (req, res, next) => {
  if (req.admin && (req.admin.role === 'admin' || req.admin.role === 'super-admin')) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admin only.' });
  }
};

export const superAdminOnly = (req, res, next) => {
  if (req.admin && req.admin.role === 'super-admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Super admin only.' });
  }
};
