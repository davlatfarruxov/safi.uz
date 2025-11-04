import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../config/api';

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/auth/login', credentials);
    localStorage.setItem('adminToken', data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

export const getProfile = createAsyncThunk('auth/profile', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/auth/profile');
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch profile');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    admin: null,
    token: localStorage.getItem('adminToken'),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.admin = null;
      state.token = null;
      localStorage.removeItem('adminToken');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.admin = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
