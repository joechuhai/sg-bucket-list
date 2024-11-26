// src/components/bucket-list/share-modal.tsx
import { Dialog } from '@/components/ui/dialog'
import { Share2, Download } from 'lucide-react'
import html2canvas from 'html2canvas'

export function ShareModal({ 
  isOpen, 
  onClose,
  stats 
}: { 
  isOpen: boolean
  onClose: () => void
  stats: {
    completed: number
    total: number
    rank: number
  }
}) {
  const saveAsImage = async () => {
    const element = document.getElementById('share-card')
    if (!element) return
    
    const canvas = await html2canvas(element)
    const link = document.createElement('a')
    link.download = '我的新加坡必做清单.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-sm w-full p-6">
          <div id="share-card" className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">我的新加坡必做清单</h2>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">{stats.completed}/{stats.total}</div>
                <div className="text-sm opacity-90">已完成事项</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">超越 {stats.rank}% 用户</div>
                <div className="text-sm opacity-90">完成度排名</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 space-y-3">
            <button
              onClick={saveAsImage}
              className="w-full flex items-center justify-center bg-blue-600 text-white rounded-lg px-4 py-2"
            >
              <Download className="w-5 h-5 mr-2" />
              保存图片
            </button>
            
            <button
              onClick={onClose}
              className="w-full flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg px-4 py-2"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}