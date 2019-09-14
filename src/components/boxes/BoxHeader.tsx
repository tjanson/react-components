import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { colors } from "../../theme"
import { BoxTitle } from "./BoxTitle"

export interface IBoxHeader extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const useBoxHeaderStyles = createUseStyles({
  default: {
    padding: [12, 16],
    backgroundColor: colors.white,
    boxShadow: `0 1px ${colors.gray[2]}`,
  },
})

export const BoxHeader = ({
  children,
  className,
  title,
  ...props
}: IBoxHeader) => {
  const styles = useBoxHeaderStyles()
  const boxHeaderClasses = classNames([styles.default, className])

  return (
    <div className={boxHeaderClasses} {...props}>
      {!!title && <BoxTitle>{title}</BoxTitle>}
      {children}
    </div>
  )
}
