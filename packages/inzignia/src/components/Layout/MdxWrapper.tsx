import * as React from "react"

import * as styles from "./MdxWrapper.module.scss"

interface PageTitleProps {
  theme?: string
  children: React.ReactNode
}

export const MdxWrapper: React.FC<PageTitleProps> = ({
  theme = "quartz",
  children,
}) => {
  const className = styles[theme]
  return <div className={className}>{children}</div>
}
