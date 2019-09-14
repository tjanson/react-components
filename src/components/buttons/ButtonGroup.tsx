import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"

export interface IButtonGroup extends HTMLAttributes<HTMLDivElement> {}

export const ButtonGroupStyles = createUseStyles({
  default: {
    display: "grid",
    gridColumnGap: 10,
    gridAutoFlow: "column",
    gridAutoColumns: "min-content",
  },
})

export const ButtonGroup = ({
  children,
  className,
  ...props
}: IButtonGroup) => {
  const styles = ButtonGroupStyles()
  const buttonGroupClasses = classNames([styles.default, className])

  return (
    <Fragment>
      <div className={buttonGroupClasses} {...props}>
        {children}
      </div>
    </Fragment>
  )
}
