import * as React from "react"
import type { GatsbySSR } from "gatsby"
import { ContextProvider } from "./src/components/Context/Context"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>
}

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({ lang: "en" })
}
