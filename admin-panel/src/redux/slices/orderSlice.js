import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/api';

export const fetchOrders = createAsyncThunk('orders/fetch', async (params = {}) => {
  const { data } = await api.get('/orders', { params });
  return data;
});

export const fetchOrder = createAsyncThunk('orders/fetchOne', async (id) => {
  const { data } = await api.get(`/orders/${id}`);
  return data;
});

export const updateOrderStatus = createAsyncThunk('orders/updateStatus', async ({ id, status, note }) => {
  const { data } = await api.put(`/orders/${id}`, { status, note });
  return data;
});

export const fetchOrderStats = createAsyncThunk('orders/stats', async () => {
  const { data } = await api.get('/orders/stats');
  return data;
});

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
    currentOrder: null,
    stats: null,
    loading: false,
    error: null,
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalOrders: 0,
    },
  },
  reducers: {
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.orders;
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalOrders: action.payload.totalOrders,
        };
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.currentOrder = action.payload;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        if (state.currentOrder?._id === action.payload._id) {
          state.currentOrder = action.payload;
        }
      })
      .addCase(fetchOrderStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      });
  },
});

export const { clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
