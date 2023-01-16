import * as React from "react"
import { Metadata, Layout } from "../components/Layout"
import type { PageProps } from "gatsby"
import { MdxWrapper } from "../components/Layout"
import HomeMdx from "../mdx/pages/home.mdx"

import * as styles from "./styles.module.scss"

const Index: React.FC<PageProps> = () => {
  return (
    <Layout title="Home">
      <span className={`${styles.homeList}`}>
        <MdxWrapper>
          <HomeMdx />
        </MdxWrapper>
      </span>
    </Layout>
  )
}

export default Index

export const Head: React.FC<PageProps> = () => {
  return <Metadata />
}
