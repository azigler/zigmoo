import * as React from "react"
import { Header } from "./Header"
import { PageTitle } from "./PageTitle"

import "./__base.scss"
import * as styles from "./Layout.module.scss"

interface LayoutProps {
  title: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.layoutDiv}>
      <Header />
      <main>
        <PageTitle title={title} />
        {children}
      </main>
    </div>
  )
}
