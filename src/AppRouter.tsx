import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { SiteLayout } from './components/SiteLayout'
import { OrderProvider } from './context/OrderContext'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OrderPage } from './pages/OrderPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { ProductsPage } from './pages/ProductsPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <ScrollToTop />
        <SiteLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/productos/:slug" element={<ProductDetailPage />} />
            <Route path="/pedido" element={<OrderPage />} />
            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SiteLayout>
      </OrderProvider>
    </BrowserRouter>
  )
}