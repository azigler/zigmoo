import * as React from "react"

import styles from "./Button.module.scss"

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  bgColor?: string
  active?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  bgColor = "white",
  active = false,
}) => {
  return (
    <button
      className={`${styles.pushable} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.shadow} />
      <span
        className={styles.edge}
        style={bgColor ? { backgroundColor: `var(--${bgColor}` } : {}}
      />
      <span
        className={styles.front}
        style={bgColor ? { backgroundColor: `var(--${bgColor})` } : {}}
      >
        {children}
      </span>
    </button>
  )
}
