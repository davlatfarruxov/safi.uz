import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get all requests
export const fetchNewProductRequests = createAsyncThunk(
  'newProductRequests/fetchAll',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      const { data } = await axios.get(`${API_URL}/new-product-requests`, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch requests');
    }
  }
);

// Update request
export const updateNewProductRequest = createAsyncThunk(
  'newProductRequests/update',
  async ({ id, requestData }, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      const { data } = await axios.put(`${API_URL}/new-product-requests/${id}`, requestData, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update request');
    }
  }
);

// Delete request
export const deleteNewProductRequest = createAsyncThunk(
  'newProductRequests/delete',
  async (id, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
      await axios.delete(`${API_URL}/new-product-requests/${id}`, config);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete request');
    }
  }
);

const newProductRequestSlice = createSlice({
  name: 'newProductRequests',
  initialState: {
    requests: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchNewProductRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewProductRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.requests = action.payload;
      })
      .addCase(fetchNewProductRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update
      .addCase(updateNewProductRequest.fulfilled, (state, action) => {
        const index = state.requests.findIndex(r => r._id === action.payload._id);
        if (index !== -1) {
          state.requests[index] = action.payload;
        }
      })
      // Delete
      .addCase(deleteNewProductRequest.fulfilled, (state, action) => {
        state.requests = state.requests.filter(r => r._id !== action.payload);
      });
  },
});

export const { clearError } = newProductRequestSlice.actions;
export default newProductRequestSlice.reducer;
