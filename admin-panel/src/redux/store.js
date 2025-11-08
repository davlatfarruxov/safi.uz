import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';
import categoryReducer from './slices/categorySlice';
import orderReducer from './slices/orderSlice';
import blogReducer from './slices/blogSlice';
import partnerReducer from './slices/partnerSlice';
import contactReducer from './slices/contactSlice';
import newProductRequestReducer from './slices/newProductRequestSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
    orders: orderReducer,
    blogs: blogReducer,
    partners: partnerReducer,
    contacts: contactReducer,
    newProductRequests: newProductRequestReducer,
  },
});
