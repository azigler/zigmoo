import * as React from "react"
import { Layout, Metadata } from "../components/Layout"
import { NavButton } from "../components/Button"
import { PageProps } from "gatsby"

import * as styles from "../components/Layout/Layout.module.scss"

const NotFound: React.FC<PageProps> = () => {
  return (
    <Layout title="404 Not Found">
      <div className={styles.notFoundOuterDiv}>
        <div className={styles.notFoundImage} />
        <div className={styles.notFoundInnerDiv}>
          <p className={styles.notFoundText}>
            The requested resource could not be found. Since this isn't a 3xx
            response, it probably wasn't
            <span style={{ fontStyle: "italic" }}>moo</span>
            &#8209;ved.
          </p>
          <NavButton to={"/"} bgColor={"white"} />
        </div>
      </div>
    </Layout>
  )
}

export default NotFound

export const Head: React.FC<PageProps> = () => {
  return <Metadata title="404 Not Found" description="URL not found" />
}
