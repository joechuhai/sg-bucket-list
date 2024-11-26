// src/app/admin/page.tsx
'use client'

import { useState } from 'react'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { Dialog } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { BucketItem } from '@/types'  // 添加这行导入

export default function AdminPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState<BucketItem | null>(null)
    

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 处理表单提交
  }




  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">管理后台</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          新增事项
        </button>
      </div>

      {/* 列表 */}
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <div className="text-sm text-gray-500 mt-1">
                  {item.category} · {item.location}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingItem(item)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 hover:bg-gray-100 rounded text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 表单对话框 */}
      <Dialog open={showForm || !!editingItem} onOpenChange={() => {
        setShowForm(false)
        setEditingItem(null)
      }}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="title"
            placeholder="标题"
            defaultValue={editingItem?.title}
          />
          <Textarea
            name="description"
            placeholder="描述"
            defaultValue={editingItem?.description}
          />
          <Select
            name="category"
            defaultValue={editingItem?.category}
            options={['美食', '景点', '活动', '文化']}
          />
          <Input
            name="location"
            placeholder="地点"
            defaultValue={editingItem?.location}
          />
          <Input
            name="coordinates"
            placeholder="坐标"
            defaultValue={editingItem?.coordinates}
          />
          <Input
            name="image"
            placeholder="图片URL"
            defaultValue={editingItem?.image}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2"
          >
            {editingItem ? '更新' : '创建'}
          </button>
        </form>
      </Dialog>
    </div>
  )
}