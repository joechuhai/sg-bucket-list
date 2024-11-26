// src/lib/store.ts
import { create } from 'zustand'

interface BucketStore {
  items: any[]
  loading: boolean
  fetchItems: () => Promise<void>
  toggleComplete: (itemId: number) => Promise<void>
}

export const useBucketStore = create<BucketStore>((set) => ({
  items: [],
  loading: false,
  fetchItems: async () => {
    set({ loading: true })
    const res = await fetch('/api/bucket-list')
    const items = await res.json()
    set({ items, loading: false })
  },
  toggleComplete: async (itemId) => {
    await fetch(`/api/complete/${itemId}`, { method: 'POST' })
    // 重新获取数据
    const store = useBucketStore.getState()
    await store.fetchItems()
  }
}))