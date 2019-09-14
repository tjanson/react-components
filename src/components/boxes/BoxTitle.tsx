import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"

export interface IBoxTitle extends HTMLAttributes<HTMLDivElement> {}

export const useBoxTitleStyles = createUseStyles({
  default: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "1.5",
  },
})

export const BoxTitle = ({ children, className, ...props }: IBoxTitle) => {
  const styles = useBoxTitleStyles()
  const boxTitleClasses = classNames([styles.default, className])

  return (
    <span className={boxTitleClasses} {...props}>
      {children}
    </span>
  )
}
