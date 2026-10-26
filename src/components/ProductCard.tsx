import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

type ProductCardProps = { product: Product; index: number }

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="product-item">
      <Link className="product-image-link" to={`/productos/${product.slug}`} aria-label={`Ver detalles de ${product.name}`}>
        <img src={product.image} alt={product.name} style={{ objectPosition: product.position }} loading={index > 2 ? 'lazy' : 'eager'} />
        <span className="product-arrow"><ArrowRight size={18} /></span>
      </Link>
      <div className="product-meta"><span>{product.category}</span><span>Murcia · España</span></div>
      <h2>{product.name}</h2>
      <p>{product.detail}</p>
    </article>
  )
}