import * as React from "react"
import { isBrowser } from "../../utils"

import * as styles from "./PageTitle.module.scss"

interface PageTitleProps {
  title: string
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const [isDevlogPost, setIsDevlogPost] = React.useState(false)
  React.useEffect(() => {
    if (isBrowser()) {
      // TODO: make this more robust
      setIsDevlogPost(
        window.location.pathname.includes("devlog") &&
          window.location.pathname !== "/devlog/"
      )
    }
  }, [setIsDevlogPost])
  return (
    <div className={styles.pageTitleDiv}>
      <div className={styles.pageTitleImage} />
      <h1
        className={`${styles.pageTitle} ${
          isDevlogPost ? styles.devlogPostTitle : ""
        }`}
      >
        {title}
      </h1>
    </div>
  )
}
