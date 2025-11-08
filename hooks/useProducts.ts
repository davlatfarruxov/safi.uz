import { useState, useEffect } from 'react';
import { getProducts, getFeaturedProducts, getNewProducts, Product } from '@/lib/api';

export const useProducts = (params?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts(params);
        setProducts(data.products || []);
        setPagination({
          currentPage: data.currentPage || 1,
          totalPages: data.totalPages || 1,
          totalProducts: data.totalProducts || 0,
        });
      } catch (err) {
        setError('Mahsulotlarni yuklashda xatolik yuz berdi');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params?.page, params?.limit, params?.category, params?.search]);

  return { products, loading, error, pagination };
};

export const useFeaturedProducts = (limit = 8) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getFeaturedProducts(limit);
        setProducts(data.products || []);
      } catch (err) {
        setError('Tanlangan mahsulotlarni yuklashda xatolik yuz berdi');
        console.error('Error fetching featured products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, [limit]);

  return { products, loading, error };
};

export const useNewProducts = (limit = 8) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getNewProducts(limit);
        setProducts(data.products || []);
      } catch (err) {
        setError('Yangi mahsulotlarni yuklashda xatolik yuz berdi');
        console.error('Error fetching new products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewProducts();
  }, [limit]);

  return { products, loading, error };
};