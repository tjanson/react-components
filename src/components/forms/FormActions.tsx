import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { gutters } from "../../theme"

export interface IFormActions extends HTMLAttributes<HTMLDivElement> {
  reverse?: boolean
}

export const FormActionStyles = createUseStyles({
  default: {
    display: "flex",
    flexDirection: "row",
    marginTop: gutters.default,
  },
  reverse: {
    flexDirection: "row-reverse",
  },
})

export const FormActions = ({
  children,
  className,
  reverse = false,
  ...props
}: IFormActions) => {
  const styles = FormActionStyles()
  const formActionsClasses = classNames([
    styles.default,
    reverse && styles["reverse"],
    className,
  ])

  return (
    <Fragment>
      <div className={formActionsClasses} {...props}>
        {children}
      </div>
    </Fragment>
  )
}
