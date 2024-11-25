// src/components/bucket-list/category-filter.tsx
interface CategoryFilterProps {
    selectedCategory: string
    onSelectCategory: (category: string) => void
  }
  
  const categories = ['美食', '景点', '活动', '文化']
  
  export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
    return (
      <div className="p-2 overflow-x-auto">
        <div className="flex space-x-2">
          <button 
            onClick={() => onSelectCategory('全部')}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === '全部' ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            全部
          </button>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    )
  }