import { create } from 'zustand';
import { BucketItem } from '@/types';

interface BucketListStore {
  items: BucketItem[];
  loading: boolean;
  fetchItems: () => Promise<void>;
  toggleComplete: (id: number) => Promise<void>;
}

export const useBucketList = create<BucketListStore>((set) => ({
  items: [],
  loading: false,
  fetchItems: async () => {
    set({ loading: true });
    try {
      const response = await fetch('/api/bucket-list');
      const items = await response.json();
      set({ items });
    } finally {
      set({ loading: false });
    }
  },
  toggleComplete: async (id) => {
    // 实现完成/取消完成逻辑
  }
}));