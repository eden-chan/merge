import { pathToRoot } from "../util/path"
import { Card } from "./Card"
import { grants } from "./data/cards"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  const cardNumber = fileData.frontmatter?.issueNo ?? 1


  const card = grants[fileData.slug as keyof typeof grants]

  return (
    <h1 class={`page-title ${displayClass ?? ""}`}>
      <a href={baseDir}>{title}</a>
      <div class="header-card desktop-only">
        <Card
          title={card?.title}
          cardNumber={cardNumber}
          href={baseDir}
          subhead={card?.subhead}
        />
      </div>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
