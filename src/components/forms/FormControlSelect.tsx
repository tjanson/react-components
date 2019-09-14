import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { hash } from "../../helpers/Hash"
import { borders, colors, fonts, placeholders, shadows } from "../../theme"
import { FormInputGroup, IFormInputGroup } from "./FormInputGroup"

export interface IFormOption {
  value: string | number
  text: string | number
}

export interface IFormControlSelect extends HTMLAttributes<HTMLSelectElement> {
  inputGroupProps?: IFormInputGroup
  options: IFormOption[]
}

export const useFormControlSelectStyles = createUseStyles({
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
    maxWidth: "100%",
    background: [
      colors.white,
      "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi41IDRIOS41TDYgMEwyLjUgNFoiIGZpbGw9IiMxQjFGMjMiLz48cGF0aCBkPSJNNiAxMkw5LjUgOEgyLjVMNiAxMloiIGZpbGw9IiMxQjFGMjMiLz48L3N2Zz4=')",
      "no-repeat right 8px center",
    ].join(" "),
    backgroundSize: [12, 12],
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
  },
})

export const FormControlSelect = ({
  className,
  inputGroupProps,
  options,
  ...props
}: IFormControlSelect) => {
  const styles = useFormControlSelectStyles()
  const formSelectClasses = classNames([styles.default, className])
  const wrapperClasses = classNames([styles.wrapper])

  return (
    <FormInputGroup {...inputGroupProps}>
      <div className={wrapperClasses}>
        <select
          placeholder={placeholders.default}
          className={formSelectClasses}
          defaultValue={hash("default")}
          {...props}
        >
          <option value={hash("default")} disabled>
            Select One...
          </option>
          {options.map(({ value, text }) => (
            <option value={value} key={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    </FormInputGroup>
  )
}
