import { useState, useEffect } from 'react';
import { getBlogs, getFeaturedBlogs, getBlogsByCategory, Blog } from '@/lib/api';

export const useBlogs = (params?: {
  page?: number;
  limit?: number;
  category?: string;
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalBlogs: 0,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBlogs(params);
        setBlogs(data.blogs || []);
        setPagination({
          currentPage: data.currentPage || 1,
          totalPages: data.totalPages || 1,
          totalBlogs: data.totalBlogs || 0,
        });
      } catch (err) {
        setError('Bloglarni yuklashda xatolik yuz berdi');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [params?.page, params?.limit, params?.category]);

  return { blogs, loading, error, pagination };
};

export const useFeaturedBlogs = (limit = 3) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getFeaturedBlogs(limit);
        setBlogs(data.blogs || []);
      } catch (err) {
        setError('Tanlangan bloglarni yuklashda xatolik yuz berdi');
        console.error('Error fetching featured blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, [limit]);

  return { blogs, loading, error };
};

export const useBlogsByCategory = (category: string, limit?: number) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) {
      setBlogs([]);
      setLoading(false);
      return;
    }

    const fetchBlogsByCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBlogsByCategory(category, limit);
        setBlogs(data.blogs || []);
      } catch (err) {
        setError('Kategoriya bloglarini yuklashda xatolik yuz berdi');
        console.error('Error fetching blogs by category:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsByCategory();
  }, [category, limit]);

  return { blogs, loading, error };
};