import * as React from "react"
import { NavItem } from "./NavItem"

import * as styles from "./Nav.module.scss"

export const Nav: React.FC = () => {
  const navItems = ["/", "/devlog/"]

  if (process.env.NODE_ENV === "development") {
    navItems.push("play|https://play.zigmoo.net")
    navItems.push("discord|matHMUfp")
    navItems.push("wiki|https://wiki.zigmoo.net")
  }

  console.log()

  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        {navItems.map((to) => {
          return <NavItem to={to} key={to} />
        })}
      </ul>
    </nav>
  )
}
