// src/components/bucket-list/bucket-header.tsx
import { Share2 } from 'lucide-react'

export function BucketHeader() {
  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">新加坡必做清单</h1>
        <Share2 className="w-6 h-6" />
      </div>
      <div className="mt-2">
        <p className="text-sm">已完成 12/50 项</p>
        <div className="w-full bg-blue-400 rounded-full h-2 mt-1">
          <div className="bg-white rounded-full h-2 w-1/4"></div>
        </div>
      </div>
    </div>
  )
}