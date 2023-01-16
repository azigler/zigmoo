import * as React from "react"
import { Logo } from "./Logo"
import { Nav } from "./Nav"

export const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  )
}
