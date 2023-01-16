import * as React from "react"
import { NavItemProps } from "zigbits"

import * as styles from "./Button.module.scss"

export const WikiButton: React.FC<NavItemProps> = ({ to }) => {
  const backgroundColor = { backgroundColor: "var(--wikijs-blue)" }

  return (
    <a
      href={to}
      className={`${styles.pushable} ${styles.whiteText}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.shadow} />
      <span className={styles.edge} style={backgroundColor} />
      <span
        className={`${styles.front} ${styles.wiki}`}
        style={{
          ...backgroundColor,
        }}
      >
        Wiki
      </span>
    </a>
  )
}
