import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './redux/slices/authSlice';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import ProductForm from './pages/ProductForm';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import Blogs from './pages/Blogs';
import BlogForm from './pages/BlogForm';
import Partners from './pages/Partners';
import Contacts from './pages/Contacts';
import NewProductRequests from './pages/NewProductRequests';

function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  return token ? children : <Navigate to="/login" />;
}

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getProfile());
    }
  }, [token, dispatch]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/edit/:id" element={<ProductForm />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/new" element={<BlogForm />} />
        <Route path="blogs/edit/:id" element={<BlogForm />} />
        <Route path="partners" element={<Partners />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="new-product-requests" element={<NewProductRequests />} />
      </Route>
    </Routes>
  );
}

export default App;
