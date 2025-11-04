import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

export const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const adminExists = await Admin.findOne({ $or: [{ email }, { username }] });
    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = await Admin.create({
      username,
      email,
      password,
      role: role || 'admin'
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id)
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      if (!admin.isActive) {
        return res.status(403).json({ message: 'Account is deactivated' });
      }

      res.json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id).select('-password');
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);

    if (admin) {
      admin.username = req.body.username || admin.username;
      admin.email = req.body.email || admin.email;

      if (req.body.password) {
        admin.password = req.body.password;
      }

      const updatedAdmin = await admin.save();

      res.json({
        _id: updatedAdmin._id,
        username: updatedAdmin.username,
        email: updatedAdmin.email,
        role: updatedAdmin.role,
        token: generateToken(updatedAdmin._id)
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
