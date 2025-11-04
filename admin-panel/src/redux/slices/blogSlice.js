import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/api';

export const fetchBlogs = createAsyncThunk('blogs/fetch', async (params = {}) => {
  const { data } = await api.get('/blogs', { params });
  return data;
});

export const fetchBlog = createAsyncThunk('blogs/fetchOne', async (id) => {
  const { data } = await api.get(`/blogs/${id}`);
  return data;
});

export const createBlog = createAsyncThunk('blogs/create', async (blogData) => {
  const { data } = await api.post('/blogs', blogData);
  return data;
});

export const updateBlog = createAsyncThunk('blogs/update', async ({ id, blogData }) => {
  const { data } = await api.put(`/blogs/${id}`, blogData);
  return data;
});

export const deleteBlog = createAsyncThunk('blogs/delete', async (id) => {
  await api.delete(`/blogs/${id}`);
  return id;
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    items: [],
    currentBlog: null,
    loading: false,
    error: null,
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalBlogs: 0,
    },
  },
  reducers: {
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.blogs;
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          totalBlogs: action.payload.totalBlogs,
        };
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.currentBlog = action.payload;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
      });
  },
});

export const { clearCurrentBlog } = blogSlice.actions;
export default blogSlice.reducer;
