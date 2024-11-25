// src/components/bucket-list/bucket-list.tsx
'use client'

import { useState } from 'react'
import { BucketHeader } from './bucket-header'
import { CategoryFilter } from './category-filter'
import { ItemList } from './item-list'
import { ShareButton } from './share-button'

export default function BucketList() {
  const [selectedCategory, setSelectedCategory] = useState('全部')

  return (
    <div className="max-w-md mx-auto">
      <BucketHeader />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ItemList selectedCategory={selectedCategory} />
      <ShareButton />
    </div>
  )
}