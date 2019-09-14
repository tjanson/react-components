import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { borders, fonts, placeholders, shadows } from "../../theme"
import { FormInputGroup, IFormInputGroup } from "./FormInputGroup"
import {
  FormControlPasswordIndicator,
  IFormControlPasswordIndicatorScore,
} from "./FormControlPasswordIndicator"

export interface IFormControlPassword extends HTMLAttributes<HTMLInputElement> {
  inputGroupProps?: IFormInputGroup
  score?: IFormControlPasswordIndicatorScore
}

export const useFormControlPasswordStyles = createUseStyles({
  default: {
    appearance: "none",
    borderRadius: borders.radius.small,
    border: 0,
    boxShadow: shadows.form.control.default.base,
    padding: [4, 26, 4, 8],
    fontFamily: fonts.system,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",
    minHeight: 28,
    width: 460,
    maxWidth: "100%",
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
  wrapper: {
    position: "relative",
    maxWidth: "100%",
  },
  indicator: {
    position: "absolute",
    right: 5,
    top: 5,
  },
})

export const FormControlPassword = ({
  className,
  inputGroupProps,
  score,
  ...props
}: IFormControlPassword) => {
  const styles = useFormControlPasswordStyles()
  const formPasswordClasses = classNames([styles.default, className])
  const wrapperClasses = classNames([styles.wrapper])
  const indicatorClasses = classNames([styles.indicator])

  return (
    <FormInputGroup {...inputGroupProps}>
      <div className={wrapperClasses}>
        <input
          placeholder={placeholders.password}
          className={formPasswordClasses}
          {...props}
          type="password"
        />
        <FormControlPasswordIndicator
          score={score}
          className={indicatorClasses}
        />
      </div>
    </FormInputGroup>
  )
}
