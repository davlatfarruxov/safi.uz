import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/api';

export const fetchProducts = createAsyncThunk('products/fetch', async (params = {}) => {
  const { data } = await api.get('/products', { params });
  return data;
});

export const fetchProduct = createAsyncThunk('products/fetchOne', async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
});

export const createProduct = createAsyncThunk('products/create', async (productData) => {
  const { data } = await api.post('/products', productData);
  return data;
});

export const updateProduct = createAsyncThunk('products/update', async ({ id, productData }) => {
  const { data } = await api.put(`/products/${id}`, productData);
  return data;
});

export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
  await api.delete(`/products/${id}`);
  return id;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    currentProduct: null,
    loading: false,
    error: null,
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalProducts: 0,
    },
  },
  reducers: {
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalProducts: action.payload.totalProducts,
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
      });
  },
});

export const { clearCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
