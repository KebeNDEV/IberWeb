type PageHeadingProps = {
  eyebrow: string
  title: string
  emphasis: string
  description?: string
}

export function PageHeading({ eyebrow, title, emphasis, description }: PageHeadingProps) {
  return (
    <div className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title} <em>{emphasis}</em></h1>
      {description && <p className="page-heading-description">{description}</p>}
    </div>
  )
}