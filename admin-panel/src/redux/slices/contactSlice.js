import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get all contacts
export const getContacts = createAsyncThunk(
  'contacts/getAll',
  async ({ page = 1, limit = 10, status }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        return rejectWithValue('No authentication token found. Please login.');
      }
      
      const params = new URLSearchParams({ page, limit });
      if (status) params.append('status', status);
      
      const response = await axios.get(`${API_URL}/contacts?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        window.location.href = '/login';
        return rejectWithValue('Session expired. Please login again.');
      }
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch contacts');
    }
  }
);

// Get contact stats
export const getContactStats = createAsyncThunk(
  'contacts/getStats',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        return rejectWithValue('No authentication token found');
      }
      
      const response = await axios.get(`${API_URL}/contacts/stats`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        window.location.href = '/login';
      }
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch stats');
    }
  }
);

// Get single contact
export const getContact = createAsyncThunk(
  'contacts/getOne',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API_URL}/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch contact');
    }
  }
);

// Update contact
export const updateContact = createAsyncThunk(
  'contacts/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.put(`${API_URL}/contacts/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update contact');
    }
  }
);

// Delete contact
export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${API_URL}/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete contact');
    }
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    currentContact: null,
    stats: null,
    loading: false,
    error: null,
    totalPages: 1,
    currentPage: 1,
    total: 0
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentContact: (state) => {
      state.currentContact = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get all contacts
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.total = action.payload.total;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get stats
      .addCase(getContactStats.fulfilled, (state, action) => {
        state.stats = action.payload.data;
      })
      // Get single contact
      .addCase(getContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.loading = false;
        state.currentContact = action.payload.data;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update contact
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(c => c._id === action.payload.data._id);
        if (index !== -1) {
          state.contacts[index] = action.payload.data;
        }
        state.currentContact = action.payload.data;
      })
      // Delete contact
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(c => c._id !== action.payload);
      });
  }
});

export const { clearError, clearCurrentContact } = contactSlice.actions;
export default contactSlice.reducer;
