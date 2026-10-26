import { ArrowLeft, ArrowRight, Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeading } from '../components/PageHeading'
import { useOrder } from '../context/OrderContext'
import { products } from '../data/products'

export function OrderPage() {
  const { items, updateQuantity, removeItem } = useOrder()
  const orderLines = items.flatMap((item) => {
    const product = products.find((candidate) => candidate.slug === item.slug)
    return product ? [{ ...item, product }] : []
  })
  const emailBody = orderLines
    .map(({ product, format, quantity }) => `- ${product.name} · ${format} · Cantidad: ${quantity}`)
    .join('\n')
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)
  const orderEmail = `mailto:ibercocktail@ibercocktail.com?subject=${encodeURIComponent('Pedido IberCocktail')}&body=${encodeURIComponent(`Hola,\n\nQuiero solicitar el siguiente pedido:\n\n${emailBody}\n\nGracias.`)}`

  return (
    <main>
      <section className="page-intro">
        <PageHeading eyebrow="Tu selección" title="Hacer" emphasis="pedido." description="Revisa los artículos y formatos elegidos. Para confirmar disponibilidad, envíanos tu solicitud." />
      </section>
      <section className="order-section" aria-labelledby="order-items-heading">
        {orderLines.length === 0 ? (
          <div className="order-empty">
            <p className="eyebrow">Aún no has añadido artículos</p>
            <h2 id="order-items-heading">Tu pedido empieza<br />en la despensa.</h2>
            <p>Explora los productos y añade los formatos que te interesen.</p>
            <Link className="catalogue-link" to="/productos">Ver productos <ArrowRight size={16} /></Link>
          </div>
        ) : (
          <>
            <div className="order-heading">
              <div>
                <p className="eyebrow">Artículos seleccionados</p>
                <h2 id="order-items-heading">Tu pedido</h2>
              </div>
              <span>{orderLines.length} {orderLines.length === 1 ? 'artículo' : 'artículos'} · {totalQuantity} {totalQuantity === 1 ? 'unidad' : 'unidades'}</span>
            </div>
            <div className="order-list">
              {orderLines.map(({ product, format, quantity }) => (
                <article className="order-item" key={`${product.slug}-${format}`}>
                  <Link className="order-item-image" to={`/productos/${product.slug}`} aria-label={`Ver ${product.name}`}>
                    <img src={product.image} alt="" />
                  </Link>
                  <div className="order-item-info">
                    <p className="eyebrow">{product.category}</p>
                    <h3><Link to={`/productos/${product.slug}`}>{product.name}</Link></h3>
                    <span>{format}</span>
                  </div>
                  <div className="order-item-actions">
                    <div className="quantity-control" aria-label={`Cantidad de ${product.name}, ${format}`}>
                      <button type="button" aria-label="Reducir cantidad" disabled={quantity === 1} onClick={() => updateQuantity(product.slug, format, quantity - 1)}><Minus size={14} /></button>
                      <span aria-live="polite">{quantity}</span>
                      <button type="button" aria-label="Aumentar cantidad" onClick={() => updateQuantity(product.slug, format, quantity + 1)}><Plus size={14} /></button>
                    </div>
                    <button className="remove-order-item" type="button" onClick={() => removeItem(product.slug, format)}>
                      <Trash2 size={14} /> Quitar
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="order-footer">
              <Link className="back-link" to="/productos"><ArrowLeft size={15} /> Seguir explorando</Link>
              <a className="order-submit" href={orderEmail}>Solicitar pedido <ArrowRight size={16} /></a>
            </div>
          </>
        )}
      </section>
    </main>
  )
}
