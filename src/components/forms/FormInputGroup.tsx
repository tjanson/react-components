import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"

export interface IFormInputGroup extends HTMLAttributes<HTMLDivElement> {}

export const FormInputGroupStyles = createUseStyles({
  default: {
    display: "flex",
    flexDirection: "row",
  },
})

export const FormInputGroup = ({
  children,
  className,
  ...props
}: IFormInputGroup) => {
  const styles = FormInputGroupStyles()
  const FormInputGroupClasses = classNames([styles.default, className])

  return (
    <Fragment>
      <div className={FormInputGroupClasses} {...props}>
        {children}
      </div>
    </Fragment>
  )
}
