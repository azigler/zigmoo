export const metadata = {
  title: "zigMOO",
  homepage: "https://www.zigmoo.net",
  description:
    "zigMOO is an indie game studio creating innovative browser-based games that champion accessibility",
  color: "#ecc51b",
}

export const siteMetadata = {
  title: metadata.title,
  siteUrl: metadata.homepage,
}

export const gatsbyPluginManifestOptions = {
  name: metadata.title,
  short_name: metadata.title,
  description: metadata.description,
  categories: ["games"],
  start_url: ".",
  background_color: metadata.color,
  theme_color: metadata.color,
  display: "standalone",
  orientation: "any",
  icon: "static/android-chrome-512x512.png",
}

export function sortByDate(arr: any[], order: string = "descending") {
  if (order === "descending") {
    return arr.sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      )
    })
  } else if (order === "ascending") {
    return arr.sort((a, b) => {
      return (
        new Date(a.frontmatter.date).getTime() -
        new Date(b.frontmatter.date).getTime()
      )
    })
  } else {
    return arr
  }
}

export const isBrowser = () => typeof window !== "undefined"
