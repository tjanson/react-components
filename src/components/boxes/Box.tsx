import classNames from "classnames"
import React, { HTMLAttributes, ReactNode } from "react"
import { createUseStyles } from "react-jss"
import { borders, colors, shadows } from "../../theme"
import { BoxBody } from "./BoxBody"
import { BoxHeader } from "./BoxHeader"

export interface IBox extends HTMLAttributes<HTMLDivElement> {
  body?: ReactNode | string
  flat?: boolean
  header?: ReactNode | string
  title?: string
}

export const useBoxStyles = createUseStyles({
  default: {
    // Flexbox display
    display: "flex",
    flexDirection: "column",

    // Stop contained element from bleeding over the edge
    overflow: "hidden",

    // Default to a white background
    backgroundColor: colors.gray[1],

    // Light box shadow to separate from other contexts
    boxShadow: shadows.box.default.base,
    border: 0,

    // Add some nice subtle rounded edges
    borderRadius: borders.radius.small,
  },
  flat: {
    // Remove the box shadow that is applied by default
    boxShadow: "none",

    // Light border to separate from other contexts
    border: `1px solid ${colors.gray[2]}`,
  },
})

export const Box = ({
  body,
  children,
  className,
  flat = false,
  header,
  title,
  ...props
}: IBox) => {
  const styles = useBoxStyles()
  const boxClasses = classNames([
    styles.default,
    flat === true && styles.flat,
    className,
  ])

  return (
    <div className={boxClasses} {...props}>
      {(!!header || !!title) && <BoxHeader title={title}>{header}</BoxHeader>}
      {!!body && <BoxBody>{body}</BoxBody>}
      {children}
    </div>
  )
}
