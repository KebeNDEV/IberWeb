import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

export type OrderLine = { slug: string; format: string; quantity: number }

type OrderContextValue = {
  items: OrderLine[]
  itemCount: number
  addItem: (product: Product, format: string, quantity?: number) => void
  updateQuantity: (slug: string, format: string, quantity: number) => void
  removeItem: (slug: string, format: string) => void
}

const OrderContext = createContext<OrderContextValue | null>(null)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderLine[]>([])

  const value = useMemo<OrderContextValue>(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    addItem: (product, format, quantity = 1) => setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.slug === product.slug && item.format === format)
      if (existingItem) {
        return currentItems.map((item) => item === existingItem ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...currentItems, { slug: product.slug, format, quantity }]
    }),
    updateQuantity: (slug, format, quantity) => setItems((currentItems) => currentItems.map((item) => (
      item.slug === slug && item.format === format ? { ...item, quantity: Math.max(1, quantity) } : item
    ))),
    removeItem: (slug, format) => setItems((currentItems) => currentItems.filter(
      (item) => item.slug !== slug || item.format !== format,
    )),
  }), [items])

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (!context) throw new Error('useOrder debe utilizarse dentro de OrderProvider')
  return context
}
