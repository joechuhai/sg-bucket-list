// src/components/bucket-list/item-list.tsx
import { MapPin, Heart, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { BucketItem } from '@/types'  // 添加这行导入

interface ItemListProps {
  selectedCategory: string
}

export function ItemList({ selectedCategory }: ItemListProps) {
  const items: BucketItem[] = [
    {
      id: 1,
      title: '打卡金沙空中花园',
      description: '在57层高空游泳，俯瞰新加坡天际线',
      category: '景点',
      likes: 2453,
      location: 'Marina Bay Sands',
      coordinates: '1.2834,103.8607',
      completed: 0,  // 注意这里改成了数字
      enabled: true,
      order: 1,
      image: '/api/placeholder/400/200'
    }
    // ... 更多测试数据
  ]

  const filteredItems = selectedCategory === '全部' 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  return (
    <div className="p-4 space-y-4">
      {filteredItems.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}

function ItemCard({ item }: { item: BucketItem }) {
  const openGoogleMaps = (coordinates: string) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    
    if (isIOS) {
      window.location.href = `comgooglemaps://?q=${coordinates}`;
    } else if (isAndroid) {
      window.location.href = `geo:${coordinates}`;
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates}`);
    }
  };

  return (
    <Card 
      className="relative h-32 cursor-pointer group"
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50"/>
      
      <div className="relative h-full p-4 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.description}</p>
          </div>
          
          <button 
            className={`flex items-center ${
              item.completed > 0 ? 'bg-green-500' : 'bg-gray-500'
            } px-2 py-1 rounded text-sm`}
          >
            <CheckCircle className="w-4 h-4 mr-1" />
            {item.completed > 0 ? '已完成' : '待完成'}
          </button>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div 
            className="flex items-center text-sm hover:text-blue-300 cursor-pointer"
            onClick={() => openGoogleMaps(item.coordinates)}
          >
            <MapPin className="w-4 h-4 mr-1" />
            {item.location}
          </div>
          <div className="flex items-center">
            <Heart className={`w-4 h-4 mr-1 ${item.completed > 0 ? 'text-red-500' : 'text-gray-300'}`} />
            <span className="text-sm">{item.likes}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}