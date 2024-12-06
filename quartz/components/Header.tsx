import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Header({ children, fileData }: QuartzComponentProps) {
  const metaDescription = "Discover and apply for microgrants ranging from $100 to $100k. Find the perfect non-dilutive funding for your project with our comprehensive guide to grant programs, fellowships, and specialized funding opportunities."
  const isLandingPage = fileData?.slug === "index"
  
  return (
    <>
      <head>
        <title>{isLandingPage ? "Merge Club - Microgrant Guide for Ambitious Builders" : fileData?.frontmatter?.title}</title>
        <meta name="description" content={metaDescription} />

        <link rel="icon" type="image/png" href="/static/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Merge Club" />
        <link rel="manifest" href="/static/site.webmanifest" />
        
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://merge.club/guide" />
        <meta property="og:title" content={isLandingPage ? "Merge Club - Microgrant Guide" : fileData?.frontmatter?.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/static/merge-logo.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://merge.club/guide" />
        <meta name="twitter:title" content={isLandingPage ? "Merge Club - Microgrant Guide" : fileData?.frontmatter?.title} />
        <meta property="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/static/merge-logo.png" />
        
    
        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
      </head>
      
      {children.length > 0 ? <header>{children}</header> : null}
    </>
  )
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor
