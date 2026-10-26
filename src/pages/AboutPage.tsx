import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHeading } from '../components/PageHeading'

const steps = [
  { number: '01', title: 'Selección en origen', description: 'Elegimos el pescado en sus zonas de pesca, con criterios de calidad y experiencia.' },
  { number: '02', title: 'Preparación manual', description: 'Limpiamos y preparamos cada pieza a mano, respetando las características del producto.' },
  { number: '03', title: 'Envasado y control', description: 'Seleccionamos los cortes y sellamos los envases antes de ponerlos a disposición del cliente.' },
]

export function AboutPage() {
  return (
    <main>
      <section className="page-intro about-page-intro">
        <PageHeading eyebrow="Sobre IberCocktail" title="El oficio se aprende." emphasis="Y se comparte." description="Una empresa familiar de Murcia, dedicada a elaborar productos del mar desde 1995." />
      </section>
      <section className="about-section about-page-section">
        <div className="about-image">
          <img src="https://ibercocktail.com/wp-content/uploads/2020/03/Productos-frescos-1.jpg" alt="Pescado fresco seleccionado en IberCocktail" />
          <span>Desde 1995 · Molina de Segura</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Una empresa familiar, cerca del mar</p>
          <h2>Experiencia que <em>se nota.</em></h2>
          <p>Iber Cocktail es una empresa familiar fundada en 1995 en Molina de Segura, Murcia. Elaboramos productos del mar con procesos artesanales y un cuidado especial en cada etapa.</p>
          <p>La selección del pescado, su preparación manual y el control de calidad forman parte de una misma manera de trabajar: respetar el producto para que conserve su sabor.</p>
          <div className="about-stats">
            <div><strong>1995</strong><span>Fundación</span></div>
            <div><strong>+40</strong><span>Personas en el equipo</span></div>
            <div><strong>+150</strong><span>Mercados</span></div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="section-heading">
          <div><p className="eyebrow">Del origen al envase</p><h2>El tiempo y las manos <em>hacen lo suyo.</em></h2></div>
          <p className="section-note">Un proceso cuidado para mantener la calidad del producto en cada paso.</p>
        </div>
        <div className="process-grid">
          {steps.map((step) => <article className="process-item" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
        </div>
        <Link className="text-link" to="/contacto">Hablemos de nuestro trabajo <ArrowRight size={15} /></Link>
      </section>
    </main>
  )
}