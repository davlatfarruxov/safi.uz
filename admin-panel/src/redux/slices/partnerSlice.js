import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get all partners
export const getPartners = createAsyncThunk(
  'partners/getAll',
  async ({ page = 1, limit = 10, status }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        return rejectWithValue('No authentication token found. Please login.');
      }
      
      const params = new URLSearchParams({ page, limit });
      if (status) params.append('status', status);
      
      const response = await axios.get(`${API_URL}/partners?${params}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        window.location.href = '/login';
        return rejectWithValue('Session expired. Please login again.');
      }
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch partners');
    }
  }
);

// Get partner stats
export const getPartnerStats = createAsyncThunk(
  'partners/getStats',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      
      if (!token) {
        return rejectWithValue('No authentication token found');
      }
      
      const response = await axios.get(`${API_URL}/partners/stats`, {
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

// Get single partner
export const getPartner = createAsyncThunk(
  'partners/getOne',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API_URL}/partners/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch partner');
    }
  }
);

// Update partner
export const updatePartner = createAsyncThunk(
  'partners/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.put(`${API_URL}/partners/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update partner');
    }
  }
);

// Delete partner
export const deletePartner = createAsyncThunk(
  'partners/delete',
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${API_URL}/partners/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete partner');
    }
  }
);

const partnerSlice = createSlice({
  name: 'partners',
  initialState: {
    partners: [],
    currentPartner: null,
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
    clearCurrentPartner: (state) => {
      state.currentPartner = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get all partners
      .addCase(getPartners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPartners.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.total = action.payload.total;
      })
      .addCase(getPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get stats
      .addCase(getPartnerStats.fulfilled, (state, action) => {
        state.stats = action.payload.data;
      })
      // Get single partner
      .addCase(getPartner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPartner.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPartner = action.payload.data;
      })
      .addCase(getPartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update partner
      .addCase(updatePartner.fulfilled, (state, action) => {
        const index = state.partners.findIndex(p => p._id === action.payload.data._id);
        if (index !== -1) {
          state.partners[index] = action.payload.data;
        }
        state.currentPartner = action.payload.data;
      })
      // Delete partner
      .addCase(deletePartner.fulfilled, (state, action) => {
        state.partners = state.partners.filter(p => p._id !== action.payload);
      });
  }
});

export const { clearError, clearCurrentPartner } = partnerSlice.actions;
export default partnerSlice.reducer;
