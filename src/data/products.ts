export type ProductCategory = 'Anchoas' | 'Boquerones' | 'Ahumados' | 'Gildas' | 'Especialidades'
export type ProductFilter = 'Todo' | ProductCategory

export type ProductFact = { label: string; value: string }
export type ProductFormatSheet = { label: string; image: string }

export type Product = {
  slug: string
  name: string
  category: ProductCategory
  detail: string
  description: string
  formats: string[]
  facts?: ProductFact[]
  formatSheets?: ProductFormatSheet[]
  image: string
  position?: string
}

export const productCategories: ProductFilter[] = ['Todo', 'Anchoas', 'Boquerones', 'Ahumados', 'Gildas', 'Especialidades']

export const products: Product[] = [
  {
    slug: 'anchoa-del-cantabrico',
    name: 'Anchoa del Cantábrico',
    category: 'Anchoas',
    detail: 'Salazón lenta · filetes limpios',
    description: 'Pescadas tradicionalmente en el Cantábrico y seleccionadas con cuidado. Maduran un mínimo de 10 meses y cada filete se limpia a mano para retirar las espinas.',
    formats: ['Bandeja 150 g', 'Tarro 200 g', 'Bandeja 300 g', 'Tarro 400 g', 'Bandeja 500 g', 'Tarro 700 g', 'Tarro 900 g'],
    facts: [
      { label: 'Origen', value: 'Mar Cantábrico' },
      { label: 'Maduración', value: 'Mínimo 10 meses' },
      { label: 'Preparación', value: 'Limpieza manual' },
    ],
    formatSheets: [
      { label: 'Bandeja · 150 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/1Anchoas-150-Ficha.jpg' },
      { label: 'Tarro · 200 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/2Anchoas-200-Ficha.jpg' },
      { label: 'Bandeja · 300 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/3Anchoas-300-Ficha.jpg' },
      { label: 'Tarro · 400 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/4Anchoa400Iber30filetes-Ficha.jpg' },
      { label: 'Bandeja · 500 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/5Anchoas-500-Ficha.jpg' },
      { label: 'Tarro · 700 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/6AnchoasIbeer700Ficha60Filetes.jpg' },
      { label: 'Tarro · 900 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/7Anchoas-900-Ficha.jpg' },
    ],
    image: 'https://ibercocktail.com/wp-content/uploads/2020/03/boquer%C3%B3n-scaled.jpg',
    position: 'center 56%',
  },
  {
    slug: 'boqueron-en-vinagre',
    name: 'Boquerón en vinagre',
    category: 'Boquerones',
    detail: 'Marinado suave · sabor limpio',
    description: 'Un producto del Cantábrico de primera calidad. Cada filete se limpia a mano y se madura en vinagre para conseguir una textura suave y un sabor agradable.',
    formats: ['Bandeja 150 g', 'Tarro 200 g', 'Tarro 400 g', 'Bandeja 700 g', 'Tarro 900 g', 'Tarro 3.500 g'],
    facts: [
      { label: 'Origen', value: 'Mar Cantábrico' },
      { label: 'Maduración', value: 'En vinagre' },
      { label: 'Preparación', value: 'Limpieza manual' },
    ],
    formatSheets: [
      { label: 'Bandeja · 150 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Boqueron-150-Ficha-T9.jpg' },
      { label: 'Tarro · 200 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Boqueron-200-Ficha-T.jpg' },
      { label: 'Tarro · 400 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Boqueron-400-Ficha-T.jpg' },
      { label: 'Bandeja · 700 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Boqueron-700-Ficha-T.jpg' },
      { label: 'Tarro · 900 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Boqueron-900-Ficha-T.jpg' },
      { label: 'Tarro · 3.500 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Boqueron-3500-Ficha-T.jpg' },
    ],
    image: 'https://ibercocktail.com/wp-content/uploads/2020/03/Anchoas-frescas-crudas-scaled.jpg',
    position: 'center 48%',
  },
  {
    slug: 'ensalada-de-salmon-y-bacalao',
    name: 'Ensalada de salmón y bacalao',
    category: 'Ahumados',
    detail: 'Receta mediterránea · salmón y bacalao',
    description: 'Una especialidad mediterránea elaborada a partir de salmón y bacalao. Consulta los formatos disponibles para tu pedido.',
    formats: ['Formatos disponibles bajo consulta'],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1100&q=85',
    position: 'center 52%',
  },
  {
    slug: 'caballa-del-sur',
    name: 'Caballa ahumada',
    category: 'Ahumados',
    detail: 'Costa atlántica · ahumado en roble',
    description: 'Caballa de la costa atlántica española. Los filetes se limpian siguiendo el método tradicional, se maceran y se ahúman ligeramente con madera de roble.',
    formats: ['Bandeja 150 g', 'Bandeja 500 g'],
    facts: [
      { label: 'Origen', value: 'Costa atlántica española' },
      { label: 'Preparación', value: 'Limpieza manual' },
      { label: 'Ahumado', value: 'Madera de roble' },
    ],
    formatSheets: [
      { label: 'Bandeja · 150 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Caballa-150-Ficha-T9.jpg' },
      { label: 'Bandeja · 500 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Caballa-500-Ficha-T.jpg' },
    ],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1100&q=85',
    position: 'center 48%',
  },
  {
    slug: 'sardina-ahumada',
    name: 'Sardina ahumada',
    category: 'Ahumados',
    detail: 'Costa atlántica · ahumado en roble',
    description: 'Sardina de la costa atlántica española, elaborada de forma tradicional y limpiada filete a filete. Se macera y se ahúma ligeramente con madera de roble.',
    formats: ['Bandeja 150 g', 'Bandeja 700 g', 'Tarro 900 g'],
    facts: [
      { label: 'Origen', value: 'Costa atlántica española' },
      { label: 'Preparación', value: 'Filete limpio' },
      { label: 'Ahumado', value: 'Madera de roble' },
    ],
    formatSheets: [
      { label: 'Bandeja · 150 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Sardina150B9-T.jpg' },
      { label: 'Bandeja · 700 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Sardina-700-Ficha-T.jpg' },
      { label: 'Tarro · 900 g', image: 'https://ibercocktail.com/wp-content/uploads/2020/06/Sardina-900-Ficha-T.jpg' },
    ],
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=1100&q=85',
    position: 'center 50%',
  },
  {
    slug: 'berula-al-ajillo',
    name: 'Berula al ajillo',
    category: 'Especialidades',
    detail: 'Una receta sencilla, hecha aquí',
    description: 'Berula al ajillo, una de las especialidades de la despensa IberCocktail. Consulta los formatos disponibles.',
    formats: ['Formatos disponibles bajo consulta'],
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1100&q=85',
    position: 'center 52%',
  },
  {
    slug: 'gilda-de-anchoa',
    name: 'Gilda de anchoa',
    category: 'Gildas',
    detail: 'Anchoa, aceituna y guindilla',
    description: 'La combinación clásica de anchoa, aceituna y guindilla, presentada en un bocado lleno de sabor. Consulta los formatos disponibles.',
    formats: ['Formatos disponibles bajo consulta'],
    image: 'https://images.unsplash.com/photo-1781115650865-6e29104a7edd?auto=format&fit=crop&w=1100&q=85',
    position: 'center 52%',
  },
  {
    slug: 'gilda-de-boqueron',
    name: 'Gilda de boquerón',
    category: 'Gildas',
    detail: 'Boquerón, aceituna y guindilla',
    description: 'Una gilda fresca y sabrosa con boquerón, aceituna y guindilla. Consulta los formatos disponibles.',
    formats: ['Formatos disponibles bajo consulta'],
    image: 'https://images.unsplash.com/photo-1781115650818-3e3504c4ad67?auto=format&fit=crop&w=1100&q=85',
    position: 'center 52%',
  },
  {
    slug: 'gilda-matrimonio',
    name: 'Gilda matrimonio',
    category: 'Gildas',
    detail: 'Anchoa y boquerón en un mismo bocado',
    description: 'Una combinación de anchoa y boquerón con aceituna y guindilla para reunir dos sabores del mar en un mismo bocado. Consulta los formatos disponibles.',
    formats: ['Formatos disponibles bajo consulta'],
    image: 'https://images.unsplash.com/photo-1781115650834-92048869f536?auto=format&fit=crop&w=1100&q=85',
    position: 'center 52%',
  },
]