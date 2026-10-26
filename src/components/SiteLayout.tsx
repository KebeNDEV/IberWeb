import { useEffect, useState, type ReactNode } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useOrder } from '../context/OrderContext'

type SiteLayoutProps = { children: ReactNode }

export function SiteLayout({ children }: SiteLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { itemCount } = useOrder()
  const location = useLocation()
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const compactAt = 80
    const expandAt = 16
    const updateScrollState = () => {
      const scrollPosition = window.scrollY
      setIsScrolled((currentlyScrolled) => currentlyScrolled
        ? scrollPosition > expandAt
        : scrollPosition > compactAt)
    }
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const elements = document.querySelectorAll<HTMLElement>(
      'main > section, .product-item, .process-item, .contact-detail, .order-item, .home-page .hero-copy > *, .home-page .section-heading > *, .home-page .home-about > *, .home-page .home-contact > *',
    )
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })

    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 65}ms`)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <header className={isScrolled ? 'site-header is-scrolled' : 'site-header'}>
        <Link className="wordmark" to="/" aria-label="IberCocktail, inicio" onClick={closeMenu}>
          <img className="brand-logo" src="https://ibercocktail.com/wp-content/uploads/2021/07/cropped-ibercocktail-png.png" alt="IberCocktail" />
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
          <NavLink to="/productos" onClick={closeMenu}>Productos</NavLink>
          <NavLink to="/sobre-nosotros" onClick={closeMenu}>Sobre nosotros</NavLink>
          <NavLink className="nav-contact" to="/contacto" onClick={closeMenu}>Contacto</NavLink>
          <NavLink className="nav-order nav-order-cta" to="/pedido" onClick={closeMenu}><ShoppingBag size={15} /> Hacer pedido{itemCount > 0 && <span className="order-count">{itemCount}</span>}</NavLink>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <Link className="wordmark footer-wordmark" to="/" aria-label="IberCocktail, volver al inicio">
          <img className="brand-logo" src="https://ibercocktail.com/wp-content/uploads/2021/07/cropped-ibercocktail-png.png" alt="IberCocktail" />
        </Link>
        <p>El sabor del mar, hecho con oficio.</p>
        <div className="footer-links">
          <Link to="/productos">Productos</Link>
          <Link to="/pedido">Hacer pedido</Link>
          <Link to="/sobre-nosotros">Sobre nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <span className="copyright">© 2026 IberCocktail · Murcia</span>
      </footer>
    </div>
  )
}