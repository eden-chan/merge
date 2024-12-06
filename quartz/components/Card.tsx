export interface CardProps {
  title: string
  subhead?: string
  links?: Array<{
    url: string
    text: string
  }>
  cardNumber?: number
  href?: string
}

export function Card({ title, subhead, links, cardNumber, href }: CardProps) {
  return (
    <a href={href} style={{ display: 'contents' }}>
      <div className={`card card-${cardNumber}`}>
        <p className="card-title">{title}</p>
        <p className="card-subhead">{subhead}</p>
        {links && (
          <ul className="unstyled-list">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="white-text">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  )
} 