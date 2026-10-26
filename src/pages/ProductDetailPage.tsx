import { useState } from 'react'
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useOrder } from '../context/OrderContext'
import { demoNutritionByProduct } from '../data/demoNutrition'
import { products } from '../data/products'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [selectedFormat, setSelectedFormat] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [addedToOrder, setAddedToOrder] = useState(false)
  const [addAnimationId, setAddAnimationId] = useState(0)
  const { addItem } = useOrder()

  if (!product) return <Navigate to="/productos" replace />

  const formatOptions = product.formatSheets?.map((format) => format.label)
    ?? product.formats.filter((format) => !format.toLowerCase().includes('consulta'))
  const availableFormatOptions = formatOptions.length > 0 ? formatOptions : ['Consultar formatos']
  const activeFormat = availableFormatOptions.find((format) => format === selectedFormat) ?? availableFormatOptions[0]
  const weightMatch = activeFormat.match(/[\d.]+\s*g/i)?.[0]
  const activeFormatWeight = weightMatch ?? 'Bajo consulta'
  const packageWeight = weightMatch ? Number(weightMatch.replace(/[^\d]/g, '')) : 100
  const nutritionFacts = demoNutritionByProduct[product.slug] ?? []
  return (
    <main>
      <section className="product-details-section product-detail-page">
        <Link className="back-link detail-back-link" to="/productos"><ArrowLeft size={18} aria-hidden="true" /> Volver al catálogo</Link>
        <div className="product-breadcrumb">
          <Link to="/">Inicio</Link><span>/</span><Link to="/productos">Productos</Link><span>/</span><span>{product.name}</span>
        </div>
        <div className="product-detail-layout">
          <div className="product-detail-media">
            <div className="product-detail-photo">
              <img src={product.image} alt={product.name} />
              <span>{product.category} · IberCocktail</span>
            </div>
            </div>
          <div className="product-detail-copy">
            <p className="eyebrow detail-eyebrow">{product.category} · Murcia, España</p>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.description}</p>
            {product.facts && (
              <dl className="product-facts">
                {product.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
              </dl>
            )}
            <div className="format-picker">
              <p className="eyebrow">Presentaciones</p>
              <div className="format-options" role="group" aria-label="Selecciona un formato">
                {availableFormatOptions.map((format) => (
                  <button
                    className={format === activeFormat ? 'format-option selected' : 'format-option'}
                    key={format}
                    onClick={() => setSelectedFormat(format)}
                    type="button"
                    aria-pressed={format === activeFormat}
                  >
                    {format}
                  </button>
                ))}
              </div>
            </div>
            <section className="nutrition-panel" aria-live="polite" aria-labelledby="nutrition-heading">
              <div className="nutrition-panel-heading">
                <div>
                  <p className="eyebrow">{activeFormat}</p>
                  <h2 id="nutrition-heading">Información nutricional</h2>
                </div>
                <span className="nutrition-status">DEMO</span>
              </div>
              <p className="nutrition-format-weight">
                {weightMatch ? 'Por envase' : 'Base demo por 100 g'}
                {weightMatch && <strong>{activeFormatWeight}</strong>}
              </p>
              <dl className="nutrition-values">
                {nutritionFacts.map((fact) => {
                  const amount = fact.per100g * packageWeight / 100
                  const formattedAmount = fact.unit === 'kcal'
                    ? Math.round(amount).toLocaleString('es-ES')
                    : amount.toLocaleString('es-ES', { maximumFractionDigits: 1 })

                  return <div key={fact.label}><dt>{fact.label}</dt><dd>{formattedAmount} {fact.unit}</dd></div>
                })}
              </dl>
            </section>
            <div className="detail-order-actions">
              <div className="detail-quantity">
                <span>Cantidad</span>
                <div className="quantity-control" aria-label={`Cantidad de ${product.name} a añadir`}>
                  <button type="button" aria-label="Reducir cantidad" disabled={quantity === 1} onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus size={14} /></button>
                  <span aria-live="polite">{quantity}</span>
                  <button type="button" aria-label="Aumentar cantidad" onClick={() => setQuantity((current) => current + 1)}><Plus size={14} /></button>
                </div>
              </div>
              <span className="detail-add-button-wrap">
                <button className="order-submit detail-add-button" type="button" onClick={() => {
                  addItem(product, activeFormat, quantity)
                  setAddedToOrder(true)
                  setAddAnimationId((current) => current + 1)
                }}>
                  <ShoppingBag size={16} /> Añadir al pedido
                </button>
                {addAnimationId > 0 && (
                  <>
                    <span key={`flash-${addAnimationId}`} className="add-button-flash" aria-hidden="true" />
                    <span key={`quantity-${addAnimationId}`} className="add-quantity-flight" aria-hidden="true">+{quantity}</span>
                  </>
                )}
              </span>
              {addedToOrder && <Link className="detail-order-confirmation" to="/pedido" role="status">Añadido · Ver pedido <ArrowRight size={14} /></Link>}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}