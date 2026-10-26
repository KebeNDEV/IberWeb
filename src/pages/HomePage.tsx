import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'

const heroSlides = [
  {
    image: products[0].image,
    alt: 'Anchoas del Cantábrico preparadas con cuidado',
    caption: 'El Cantábrico, en su punto',
  },
  {
    image: products[1].image,
    alt: 'Boquerones frescos seleccionados a mano',
    caption: 'Sabor limpio, hecho a mano',
  },
  {
    image: products[3].image,
    alt: 'Caballa ahumada de forma tradicional',
    caption: 'Ahumados con oficio',
  },
]

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])
  const slide = heroSlides[activeSlide]

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Desde Murcia, cerca del mar</p>
          <h1>El mar,<br /><em>bien</em> conservado.</h1>
          <p className="hero-description">Pescado escogido. Manos expertas. El sabor de siempre, preparado para quedarse en la mesa.</p>
          <Link className="text-link" to="/productos">Conoce nuestra despensa <ArrowDown size={15} /></Link>
          <div className="hero-stamp" aria-label="Calidad cuidada en cada detalle"><span>CALIDAD</span><span className="stamp-star">✳</span><span>DE ORIGEN</span></div>
        </div>
        <div className="hero-image-wrap" role="region" aria-roledescription="carrusel" aria-label="Nuestra selección del mar">
          <img key={slide.image} className="hero-image" src={slide.image} alt={slide.alt} />
          <div className="image-caption"><span>{slide.caption}</span></div>
          <span className="hero-side-note">DE LA COSTA A TU MESA</span>
        </div>
      </section>
      <section className="promise-section" aria-label="Nuestra forma de trabajar">
        <div className="promise-strip">
          <div className="promise-heading">
            <p className="eyebrow">Nuestra manera de trabajar</p>
            <p className="promise-intro">El cuidado se nota<br /><em>en el sabor.</em></p>
          </div>
          <div className="promise-item"><span className="promise-number">01</span><div><h2>Origen cuidado</h2><p>Seleccionamos pescado de calidad y respetamos su temporada.</p></div></div>
          <div className="promise-item"><span className="promise-number">02</span><div><h2>Oficio de verdad</h2><p>El saber hacer de siempre, aplicado a cada elaboración.</p></div></div>
          <div className="promise-item"><span className="promise-number">03</span><div><h2>Sin artificios</h2><p>Recetas claras, ingredientes reconocibles y sabor honesto.</p></div></div>
        </div>
      </section>
      <section className="pantry-section home-products">
        <div className="section-heading">
          <div><p className="eyebrow">Una despensa con carácter</p><h2>Del mar, <em>a tu manera.</em></h2></div>
          <Link className="text-link" to="/productos">Ver todos los productos <ArrowRight size={15} /></Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 3).map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
        </div>
      </section>
      <section className="home-order-guide" aria-labelledby="home-order-heading">
        <div className="home-order-heading">
          <p className="eyebrow">De la despensa a tu mesa</p>
          <h2 id="home-order-heading">Hacer tu pedido<br /><em>es muy sencillo.</em></h2>
        </div>
        <ol className="home-order-steps">
          <li><span>01</span><h3>Elige tus productos</h3><p>Explora las variedades y formatos disponibles en el catálogo.</p></li>
          <li><span>02</span><h3>Prepara tu solicitud</h3><p>Añade al pedido los productos y cantidades que te interesan.</p></li>
          <li><span>03</span><h3>Te confirmamos</h3><p>Envíanos la solicitud por email y te confirmaremos disponibilidad y siguientes pasos.</p></li>
        </ol>
        <Link className="catalogue-link home-order-cta" to="/productos">Explorar productos <ArrowRight size={16} /></Link>
      </section>
      <section className="home-about">
        <div><p className="eyebrow">Desde 1995 · Molina de Segura</p><h2>Un oficio que pasa <em>de mano en mano.</em></h2></div>
        <Link className="text-link" to="/sobre-nosotros">Conoce nuestra historia <ArrowRight size={15} /></Link>
      </section>
      <section className="home-contact">
        <p className="eyebrow">¿Buscas algo concreto?</p>
        <h2>Hablemos <em>de mar.</em></h2>
        <Link className="nav-contact" to="/contacto">Contacta con nosotros <ArrowRight size={15} /></Link>
      </section>
    </main>
  )
}