import { useState, useCallback } from 'react';
import type { Product } from '../data/types';

const STORAGE_KEY = 'farmacia-dilania-recent';
const MAX_ITEMS = 8;

function loadRecent(): Product[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useRecentlyViewed() {
  const [recentItems, setRecentItems] = useState<Product[]>(loadRecent);

  const addToRecent = useCallback((product: Product) => {
    setRecentItems((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      const updated = [product, ...filtered].slice(0, MAX_ITEMS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { recentItems, addToRecent };
}
