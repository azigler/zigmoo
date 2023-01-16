import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { animated, Transition } from "@react-spring/web"
import { Layout, MdxWrapper, Metadata } from "../../components/Layout"
import { DevlogPost } from "../../components/DevlogPost"
import DevlogMdx from "../../mdx/pages/devlog.mdx"
import { sortByDate } from "../../utils"

import * as styles from "../styles.module.scss"

export const query = graphql`
  query AllDevlogPosts {
    allMdx(filter: { frontmatter: { slug: { ne: null } } }) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "MMMM D, YYYY")
        }
        excerpt
      }
    }
  }
`

const Devlog: React.FC<PageProps> = ({ data }: { data: any }) => {
  return (
    <Layout title="Devlog">
      <MdxWrapper>
        <DevlogMdx />
      </MdxWrapper>
      <ul className={styles.devlogPostList}>
        <Transition
          items={sortByDate(data.allMdx.nodes)}
          from={{ opacity: 0, scale: 0 }}
          enter={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          trail={100}
        >
          {(style, item) => {
            const data = { mdx: item } // converts to expected format for DevlogPost
            return (
              <animated.span style={style}>
                <Link
                  key={item.frontmatter.title}
                  to={`/devlog/${item.frontmatter.slug}`}
                  className={styles.devlogPostLink}
                >
                  <li>
                    <DevlogPost preview={true} data={data} />
                  </li>
                </Link>
              </animated.span>
            )
          }}
        </Transition>
      </ul>
    </Layout>
  )
}

export default Devlog

export const Head: React.FC<PageProps> = () => {
  return (
    <Metadata
      title="Devlog"
      description="The development logs from zigMOO, an indie game studio creating innovative browser-based games that champion accessibility"
    />
  )
}
