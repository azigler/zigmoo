import * as React from "react"
import { NavItemProps } from "../Layout/NavItem"

import * as styles from "./Button.module.scss"

export const DiscordButton: React.FC<NavItemProps> = ({ to }) => {
  const backgroundColor = {
    backgroundColor: "var(--discord-blurple)",
  }

  return (
    <a
      href={`https://discord.gg/${to}`}
      className={`${styles.pushable} ${styles.whiteText}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.shadow} />
      <span className={styles.edge} style={backgroundColor} />
      <span
        className={`${styles.front} ${styles.discord}`}
        style={{
          ...backgroundColor,
        }}
      >
        Discord
      </span>
    </a>
  )
}
