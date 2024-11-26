// src/lib/store.ts
import { create } from 'zustand'
import { BucketItem } from '@/types'

interface BucketStore {
  items: BucketItem[]
  loading: boolean
  fetchItems: () => Promise<void>
  toggleComplete: (itemId: number) => Promise<void>
  toggleLike: (itemId: number) => Promise<void>
}

export const useBucketStore = create<BucketStore>((set, get) => ({
  items: [],
  loading: false,
  fetchItems: async () => {
    set({ loading: true })
    try {
      const res = await fetch('/api/bucket-list')
      const items = await res.json()
      set({ items })
    } finally {
      set({ loading: false })
    }
  },
  toggleComplete: async (itemId) => {
    const items = get().items
    const item = items.find(i => i.id === itemId)
    if (!item) return

    await fetch(`/api/bucket-list/${itemId}/complete`, {
      method: 'POST'
    })
    
    // 乐观更新UI
    set({
      items: items.map(i => 
        i.id === itemId 
          ? { ...i, completed: i.completed > 0 ? 0 : 1 }
          : i
      )
    })
  },
  toggleLike: async (itemId) => {
    const items = get().items
    const item = items.find(i => i.id === itemId)
    if (!item) return

    await fetch(`/api/bucket-list/${itemId}/like`, {
      method: 'POST'
    })
    
    // 乐观更新UI
    set({
      items: items.map(i => 
        i.id === itemId 
          ? { ...i, likes: i.likes + (i.completed > 0 ? -1 : 1) }
          : i
      )
    })
  }
}))