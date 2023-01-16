import * as React from "react"
import { NavItemProps } from "zigbits"

import * as styles from "./Button.module.scss"

export const PlayButton: React.FC<NavItemProps> = ({ to }) => {
  return (
    <a
      href={to}
      className={`${styles.pushable} ${styles.whiteText}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.shadow} />
      <span
        className={styles.edge}
        style={{ backgroundColor: "var(--marigold)" }}
      />
      <span
        className={`${styles.front} ${styles.play}`}
        style={{ backgroundColor: "var(--cowbell-gold)" }}
      >
        Play!
      </span>
    </a>
  )
}
