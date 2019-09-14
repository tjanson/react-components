import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { colors } from "../../theme"

export interface IFormLabel extends HTMLAttributes<HTMLLabelElement> {
  text?: string
}

export const useFormLabelStyles = createUseStyles({
  label: {
    fontSize: 14,
    lineHeight: "20px",
    marginBottom: 6,
    fontWeight: 500,
    color: colors.black,
  },
})

export const FormLabel = ({
  children,
  className,
  text,
  ...props
}: IFormLabel) => {
  const styles = useFormLabelStyles()
  const formLabelClasses = classNames([styles.label, className])

  return (
    <label className={formLabelClasses} {...props}>
      {text}
      {children}
    </label>
  )
}
