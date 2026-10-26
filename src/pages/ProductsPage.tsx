import { useState } from 'react'
import { PageHeading } from '../components/PageHeading'
import { ProductCard } from '../components/ProductCard'
import { ProductFilters } from '../components/ProductFilters'
import { productCategories, products, type ProductFilter } from '../data/products'

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductFilter>('Todo')
  const visibleProducts = activeCategory === 'Todo'
    ? products
    : products.filter((product) => product.category === activeCategory)

  return (
    <main>
      <section className="page-intro">
        <PageHeading eyebrow="La despensa IberCocktail" title="Del mar," emphasis="a tu manera." description="Anchoas, boquerones, ahumados y gildas elaborados con selección y oficio." />
      </section>
      <section className="pantry-section products-page-section">
        <div className="product-toolbar">
          <ProductFilters categories={productCategories} activeCategory={activeCategory} onChange={setActiveCategory} />
          <span className="product-count">{String(visibleProducts.length).padStart(2, '0')} productos</span>
        </div>
        <div className="product-grid" aria-live="polite">
          {visibleProducts.map((product) => <ProductCard key={product.slug} product={product} index={products.indexOf(product)} />)}
        </div>
      </section>
    </main>
  )
}