import * as React from "react"

import * as styles from "./Logo.module.scss"

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <span aria-label="zigMOO" className={styles.logoText}>
        <span>z</span>
        <sup>!</sup>
        <span>g</span>
        <span>M</span>
        <sub>O</sub>
        <span>O</span>
      </span>
      <div className={styles.logoImage} />
    </div>
  )
}
