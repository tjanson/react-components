import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { borders, fonts, placeholders, shadows } from "../../theme"
import { FormInputGroup, IFormInputGroup } from "./FormInputGroup"

export interface IFormControlTextarea
  extends HTMLAttributes<HTMLTextAreaElement> {
  inputGroupProps?: IFormInputGroup
}

export const useFormControlTextareaStyles = createUseStyles({
  default: {
    appearance: "none",
    borderRadius: borders.radius.small,
    border: 0,
    boxShadow: shadows.form.control.default.base,
    padding: [4, 8],
    fontFamily: fonts.system,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",
    minHeight: 28,
    width: 460,
    maxWidth: "100%",
    resize: "vertical",
    height: 28 * 3,
    outline: 0,

    "&:hover": {
      boxShadow: shadows.form.control.default.active,
    },

    "&:focus": {
      boxShadow: [shadows.form.control.default.active, shadows.focus.base].join(
        ","
      ),
    },

    "&:active": {
      boxShadow: [shadows.form.control.default.active, shadows.focus.base].join(
        ","
      ),
    },
  },
})

export const FormControlTextarea = ({
  className,
  inputGroupProps,
  ...props
}: IFormControlTextarea) => {
  const styles = useFormControlTextareaStyles()
  const formControlClasses = classNames([styles.default, className])

  return (
    <FormInputGroup {...inputGroupProps}>
      <textarea
        placeholder={placeholders.default}
        className={formControlClasses}
        {...props}
      ></textarea>
    </FormInputGroup>
  )
}
