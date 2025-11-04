import { useState, useEffect } from 'react';
import { getCategories, getMainCategories, getSubCategories, Category } from '@/lib/api';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCategories();
        setCategories(data || []);
      } catch (err) {
        setError('Kategoriyalarni yuklashda xatolik yuz berdi');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export const useMainCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMainCategories();
        setCategories(data || []);
      } catch (err) {
        setError('Asosiy kategoriyalarni yuklashda xatolik yuz berdi');
        console.error('Error fetching main categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMainCategories();
  }, []);

  return { categories, loading, error };
};

export const useSubCategories = (parentId: string) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!parentId) {
      setCategories([]);
      setLoading(false);
      return;
    }

    const fetchSubCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getSubCategories(parentId);
        setCategories(data || []);
      } catch (err) {
        setError('Sub kategoriyalarni yuklashda xatolik yuz berdi');
        console.error('Error fetching sub categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubCategories();
  }, [parentId]);

  return { categories, loading, error };
};