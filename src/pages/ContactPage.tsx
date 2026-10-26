import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { PageHeading } from '../components/PageHeading'

export function ContactPage() {
  return (
    <main>
      <section className="page-intro contact-page-intro">
        <PageHeading eyebrow="Contacto" title="Hablemos" emphasis="de mar." description="Cuéntanos qué producto o formato estás buscando. Te atenderemos encantados." />
      </section>
      <section className="contact-section contact-page-section">
        <div className="contact-heading">
          <p className="eyebrow">Estamos al otro lado</p>
          <h2>Encuentra<br />tu <em>contacto.</em></h2>
          <p>Para consultar el catálogo, formatos disponibles o cualquier otra cuestión, escríbenos o llámanos.</p>
          <a className="contact-email" href="mailto:ibercocktail@ibercocktail.com">ibercocktail@ibercocktail.com <Mail size={16} /></a>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><MapPin size={19} /><div><h3>Visítanos</h3><p>Iber Cocktail, S.L.<br />C/ Uruguay, Nave 3 · Pol. Ind. La Serreta<br />30500 Molina de Segura, Murcia</p><a href="https://goo.gl/maps/VZstfWgzHAh92rUUA" target="_blank" rel="noreferrer">Cómo llegar</a></div></div>
          <div className="contact-detail"><Phone size={18} /><div><h3>Llámanos</h3><a href="tel:+34968640084">968 64 00 84</a></div></div>
          <div className="contact-detail"><Clock3 size={18} /><div><h3>Horario</h3><p>Lunes a jueves · 8:30–14:00 y 15:30–18:30<br />Viernes · 8:00–15:00</p></div></div>
          <div className="contact-detail"><Mail size={18} /><div><h3>Correo</h3><a href="mailto:ibercocktail@ibercocktail.com">ibercocktail@ibercocktail.com</a></div></div>
        </div>
      </section>
    </main>
  )
}