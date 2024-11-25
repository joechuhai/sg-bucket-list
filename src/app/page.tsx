// src/app/page.tsx
import BucketList from '@/components/bucket-list/bucket-list'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BucketList />
    </main>
  )
}