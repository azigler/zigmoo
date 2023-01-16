import * as React from "react"
import { metadata } from "../../utils"
import { isBrowser } from "../../utils"

const data = {
  ...metadata,
  og_image: `https://www.zigmoo.net/og-image.png`,
}

interface SEOProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

const cache = new Date().getTime()

export const Metadata: React.FC<SEOProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title ? `${title} | ${data.title}` : `${data.title}`}</title>
      <meta
        name="description"
        content={description ? description : data.description}
      />
      <meta name="og:type" content="website" />
      <meta name="og:locale" content="en_US" />
      <meta name="og:site_name" content={data.title} />
      <meta
        name="og:title"
        content={title ? `${title} | ${data.title}` : `${data.title}`}
      />
      <meta
        name="og:url"
        content={isBrowser() ? window.location.href : undefined}
      />
      <meta name="og:image" content={data.og_image} />
      <meta
        name="og:description"
        content={description ? description : data.description}
      />
      <meta
        name="twitter:title"
        content={title ? `${title} | ${data.title}` : `${data.title}`}
      />
      <meta
        name="twitter:description"
        content={description ? description : data.description}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={data.og_image} />
      <link
        rel="canonical"
        href={isBrowser() ? window.location.href : undefined}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/apple-touch-icon.png?v=${cache}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon-32x32.png?v=${cache}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon-16x16.png?v=${cache}`}
      />
      <link
        rel="mask-icon"
        href={`/safari-pinned-tab.svg?v=${cache}`}
        color={data.color}
      />
      <link rel="shortcut icon" href={`/favicon.ico?v=${cache}`} />
      <meta name="msapplication-TileColor" content={data.color} />
      <meta name="theme-color" content={data.color} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: data.title,
          url: data.homepage,
        })}
      </script>
      {children}
    </>
  )
}
