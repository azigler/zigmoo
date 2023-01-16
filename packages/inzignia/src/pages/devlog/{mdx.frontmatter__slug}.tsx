import * as React from "react"
import { graphql, HeadProps } from "gatsby"
import { Layout, Metadata } from "../../components/Layout"
import { DevlogPost } from "../../components/DevlogPost"
import type { DevlogPostProps } from "../../components/DevlogPost/DevlogPost"
import { Redirect } from "@reach/router"

export const query = graphql`
  query DevlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        date(formatString: "MMMM D, YYYY")
      }
      excerpt
      body
      id
    }
  }
`

/* query DevlogPost($id: String) {
  allMdx(filter: {id: {eq: $id}, frontmatter: {slug: {ne: null}}}) {
    nodes {
      frontmatter {
        slug
        title
        date(formatString: "MMMM D, YYYY")
      }
      excerpt
      body
      id
    }
  }
} */

const Post: React.FC<DevlogPostProps> = ({ data, children }) => {
  if (!data || !data.mdx || !data.mdx.frontmatter || !data.mdx.frontmatter.slug)
    return <Redirect noThrow to="/devlog/" />

  return (
    <Layout
      title={`#${data.mdx.frontmatter.slug}: ${data.mdx.frontmatter.title}`}
    >
      <DevlogPost data={data}>{children}</DevlogPost>
    </Layout>
  )
}

export default Post

export const Head = (props: HeadProps<Queries.DevlogPostQuery>) => {
  if (
    !props.data ||
    !props.data.mdx ||
    !props.data.mdx.frontmatter ||
    !props.data.mdx.excerpt
  )
    return
  return (
    <Metadata
      title={`Devlog #${props.data.mdx.frontmatter.slug}: ${props.data.mdx.frontmatter.title}`}
      description={props.data.mdx.excerpt}
    />
  )
}
