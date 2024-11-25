// src/components/bucket-list/share-button.tsx
import { Share2 } from 'lucide-react'

export function ShareButton() {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center">
        <Share2 className="w-5 h-5 mr-2" />
        分享我的成就
      </button>
    </div>
  )
}