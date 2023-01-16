import * as React from "react"
import { NavButton, DiscordButton, WikiButton, PlayButton } from "../Button"

import * as styles from "./NavItem.module.scss"

import { NavItemProps } from "zigbits"

export const NavItem: React.FC<NavItemProps> = ({ to }) => {
  let inner = <></>
  const navItemType = to.split("|")[0]
  const navItemTo = to.split("|")[1]
  switch (navItemType) {
    case "discord": {
      inner = <DiscordButton to={navItemTo} />
      break
    }
    case "wiki": {
      inner = <WikiButton to={navItemTo} />
      break
    }
    case "play": {
      inner = <PlayButton to={navItemTo} />
      break
    }
    default: {
      inner = <NavButton to={to} />
    }
  }

  return (
    <li className={styles.navItem} key={to}>
      {inner}
    </li>
  )
}
