// src/components/bucket-list/item-list.tsx
'use client'

import { useEffect } from 'react'
import { MapPin, Heart, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useBucketStore } from '@/lib/store'
import { BucketItem } from '@/types'  // 添加这行导入

export function ItemList({ selectedCategory }: { selectedCategory: string }) {
  const { items, loading, fetchItems, toggleComplete, toggleLike } = useBucketStore()

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const filteredItems = selectedCategory === '全部' 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  if (loading) {
    return <div className="p-4">加载中...</div>
  }

  return (
    <div className="p-4 space-y-3">
      {filteredItems.map(item => (
        <ItemCard 
          key={item.id} 
          item={item}
          onComplete={() => toggleComplete(item.id)}
          onLike={() => toggleLike(item.id)}
        />
      ))}
    </div>
  )
}

function ItemCard({ 
  item, 
  onComplete, 
  onLike 
}: { 
  item: BucketItem
  onComplete: () => void
  onLike: () => void 
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative h-[76px] cursor-pointer group bg-gray-800">
        {/* 背景图和遮罩层 */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/40"/>
        
        <div className="relative h-full p-3 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg mb-0.5">{item.title}</h3>
              <p className="text-sm text-gray-200 line-clamp-1">{item.description}</p>
            </div>
            
            <button 
              onClick={onComplete}
              className={`flex items-center transition-colors ${
                item.completed > 0 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-gray-500/70 hover:bg-gray-600/70'
              } px-2 py-1 rounded-full text-sm`}
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              {item.completed > 0 ? '已完成' : '待完成'}
            </button>
          </div>
          
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {item.location}
            </div>
            <button 
              onClick={onLike}
              className="flex items-center space-x-1 group"
            >
              <Heart 
                className={`w-4 h-4 transition-colors ${
                  item.likes > 0 
                    ? 'text-red-500' 
                    : 'text-gray-300 group-hover:text-red-400'
                }`} 
              />
              <span className="text-sm">{item.likes}</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}