import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404 · Página no encontrada</p>
      <h1>Este rumbo <em>no existe.</em></h1>
      <Link className="text-link" to="/">Volver al inicio</Link>
    </main>
  )
}