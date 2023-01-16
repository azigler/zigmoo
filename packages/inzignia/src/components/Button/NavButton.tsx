import * as React from "react"
import { Link } from "gatsby"
import { NavItemProps } from "zigbits"
import { isBrowser } from "../../utils"

import * as styles from "./Button.module.scss"

export const NavButton: React.FC<NavItemProps> = ({
  to,
  bgColor = "marigold",
  whiteText = false,
}) => {
  const [active, setActive] = React.useState(false)
  React.useEffect(() => {
    if (isBrowser()) {
      setActive(window.location.pathname === to)
    }
  }, [to])

  const backgroundColor = { backgroundColor: `var(--${bgColor})` }

  return (
    <Link
      to={to}
      className={`${styles.pushable} ${active ? styles.active : ""} ${
        whiteText ? styles.whiteText : ""
      }`}
    >
      <span className={styles.shadow} />
      <span className={styles.edge} style={backgroundColor} />
      <span className={styles.front} style={backgroundColor}>
        {to === "/" ? "Home" : to.slice(1, to.length - 1)}
      </span>
    </Link>
  )
}
