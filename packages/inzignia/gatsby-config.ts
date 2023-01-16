import type { GatsbyConfig } from "gatsby"
import { siteMetadata, gatsbyPluginManifestOptions } from "./src/utils"
import { remarkCodeHike } from "@code-hike/mdx"
import * as theme from "shiki/themes/one-dark-pro.json"

const config: GatsbyConfig = {
  siteMetadata,
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: gatsbyPluginManifestOptions,
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [[remarkCodeHike, { theme, showCopyButton: true }]],
        },
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "devlog-mdx",
        path: "./src/mdx/devlog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages-mdx",
        path: "./src/mdx/pages",
      },
    },
  ],
}

export default config
