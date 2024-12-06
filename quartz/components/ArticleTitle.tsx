import { pathToRoot } from "../util/path"
import { Card } from "./Card"
import { guides } from "./data/cards"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData, displayClass }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title
  const card = guides[fileData.slug as keyof typeof guides]
  const baseDir = pathToRoot(fileData.slug!)
  if (title) {
    return (
      <>
        <div class="header-card mobile-only">
          <Card title={card?.title} cardNumber={1} href={baseDir} subhead={card?.subhead} />
        </div>
        <h1 class={`article-title ${displayClass ?? ""}`}>{title}</h1>
      </>
    )
  } else {
    return null
  }
}
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
