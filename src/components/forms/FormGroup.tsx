import classNames from "classnames"
import React, { Fragment, HTMLAttributes, ReactNode } from "react"
import { createUseStyles } from "react-jss"
import { FormLabel } from "./FormLabel"
import { FormNote } from "./FormNote"

export interface IFormGroup extends HTMLAttributes<HTMLDivElement> {
  control?: ReactNode
  label?: string
  note?: string
}

export const FormGroupStyles = createUseStyles({
  default: {
    display: "flex",
    flexDirection: "column",

    "& + &": {
      marginTop: 20,
      marginBottom: 20,
    },
  },
})

export const FormGroup = ({
  children,
  control,
  className,
  label,
  note,
  ...props
}: IFormGroup) => {
  const styles = FormGroupStyles()
  const FormGroupClasses = classNames([styles.default, className])

  return (
    <Fragment>
      <div className={FormGroupClasses} {...props}>
        {!!label && <FormLabel text={label} />}
        {control}
        {!!note && <FormNote text={note} />}
        {children}
      </div>
    </Fragment>
  )
}
