import type { ProductFilter } from '../data/products'

type ProductFiltersProps = {
  categories: ProductFilter[]
  activeCategory: ProductFilter
  onChange: (category: ProductFilter) => void
}

export function ProductFilters({ categories, activeCategory, onChange }: ProductFiltersProps) {
  return (
    <div className="filter-list" role="group" aria-label="Filtrar productos">
      {categories.map((category) => (
        <button
          className={activeCategory === category ? 'filter-button active' : 'filter-button'}
          key={category}
          onClick={() => onChange(category)}
          type="button"
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  )
}