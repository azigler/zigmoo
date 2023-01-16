import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import { ContextProvider } from "./src/components/Context/Context"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <ContextProvider>{element}</ContextProvider>
}
