import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/api';

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const { data } = await api.get('/categories');
  return data;
});

export const createCategory = createAsyncThunk('categories/create', async (categoryData) => {
  const { data } = await api.post('/categories', categoryData);
  return data;
});

export const updateCategory = createAsyncThunk('categories/update', async ({ id, categoryData }) => {
  const { data } = await api.put(`/categories/${id}`, categoryData);
  return data;
});

export const deleteCategory = createAsyncThunk('categories/delete', async (id) => {
  await api.delete(`/categories/${id}`);
  return id;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
      });
  },
});

export default categorySlice.reducer;
