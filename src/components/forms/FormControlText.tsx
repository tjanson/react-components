import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { ComponentWithCustomStates } from "../../../typings/component"
import { borders, colors, fonts, placeholders, shadows } from "../../theme"
import { Spinner } from "../loaders/Spinner"
import { FormInputGroup, IFormInputGroup } from "./FormInputGroup"

export interface IFormControlText
  extends HTMLAttributes<HTMLInputElement>,
    ComponentWithCustomStates<"warning" | "loading"> {
  inputGroupProps?: IFormInputGroup
}

export const useFormControlTextStyles = createUseStyles({
  default: {
    appearance: "none",
    borderRadius: borders.radius.small,
    border: 0,
    boxShadow: shadows.form.control.default.base,
    padding: [4, 28, 4, 8],
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

  /**
   * Color Variants
   */
  success: {
    backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxMkwxMCAxNkwxOCA4IiBzdHJva2U9IiMyOEE3NDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)`,

    backgroundSize: [24, 24],
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right 4px center`,
  },
  premium: {
    backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNzQxNiAxNS4zMTc5QzExLjkwMDUgMTUuMjIyIDEyLjA5OTUgMTUuMjIyIDEyLjI1ODQgMTUuMzE3OUwxNC42OTM1IDE2Ljc4NzdDMTUuMDcyMiAxNy4wMTYyIDE1LjUzOTMgMTYuNjc2NyAxNS40Mzg4IDE2LjI0NkwxNC43OTI2IDEzLjQ3NTlDMTQuNzUwNCAxMy4yOTUyIDE0LjgxMTggMTMuMTA1OSAxNC45NTIxIDEyLjk4NDRMMTcuMTA0MyAxMS4xMTk5QzE3LjQzODYgMTAuODMwMyAxNy4yNTk5IDEwLjI4MTIgMTYuODE5MiAxMC4yNDM4TDEzLjk4NjQgMTAuMDAzNUMxMy44MDE2IDkuOTg3ODEgMTMuNjQwNyA5Ljg3MTE0IDEzLjU2ODMgOS43MDAzOUwxMi40NjA0IDcuMDg2MThDMTIuMjg4MSA2LjY3OTY3IDExLjcxMTkgNi42Nzk2NyAxMS41Mzk2IDcuMDg2MThMMTAuNDMxNyA5LjcwMDM5QzEwLjM1OTMgOS44NzExNCAxMC4xOTg0IDkuOTg3ODEgMTAuMDEzNiAxMC4wMDM1TDcuMTgwODIgMTAuMjQzOEM2Ljc0MDEgMTAuMjgxMiA2LjU2MTQgMTAuODMwMyA2Ljg5NTcgMTEuMTE5OUw5LjA0NzkgMTIuOTg0NEM5LjE4ODE4IDEzLjEwNTkgOS4yNDk2IDEzLjI5NTIgOS4yMDc0NCAxMy40NzU5TDguNTYxMjEgMTYuMjQ2QzguNDYwNzMgMTYuNjc2NyA4LjkyNzg0IDE3LjAxNjIgOS4zMDY1IDE2Ljc4NzdMMTEuNzQxNiAxNS4zMTc5WiIgZmlsbD0iIzZGNDJDMSIvPjwvc3ZnPg==)`,

    backgroundSize: [24, 24],
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right 4px center`,
  },
  warning: {
    backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuOTMzIDE2LjczMjFMMTIuNDMyNSA3LjIzMTMzQzEyLjM4NSA3LjE2MDE2IDEyLjMyMDcgNy4xMDE4MiAxMi4yNDUzIDcuMDYxNDZDMTIuMTY5OCA3LjAyMTExIDEyLjA4NTYgNyAxMiA3QzExLjkxNDQgNyAxMS44MzAyIDcuMDIxMTEgMTEuNzU0NyA3LjA2MTQ2QzExLjY3OTMgNy4xMDE4MiAxMS42MTUgNy4xNjAxNiAxMS41Njc1IDcuMjMxMzNMNi4wNjY5OSAxNi43MzIxQzYuMDIzMTMgMTYuODA4MSA2LjAwMDAyIDE2Ljg5NDMgNiAxNi45ODJDNS45OTk5OCAxNy4wNjk4IDYuMDIzMDQgMTcuMTU2IDYuMDY2ODYgMTcuMjMyQzYuMTEwNjkgMTcuMzA4IDYuMTczNzQgMTcuMzcxMSA2LjI0OTY5IDE3LjQxNUM2LjMyNTYzIDE3LjQ1ODkgNi40MTE4IDE3LjQ4MjEgNi40OTk1MyAxNy40ODIySDE3LjUwMDVDMTcuNTg4MiAxNy40ODIxIDE3LjY3NDQgMTcuNDU4OSAxNy43NTAzIDE3LjQxNUMxNy44MjYzIDE3LjM3MTEgMTcuODg5MyAxNy4zMDggMTcuOTMzMSAxNy4yMzJDMTcuOTc3IDE3LjE1NiAxOCAxNy4wNjk4IDE4IDE2Ljk4MkMxOCAxNi44OTQzIDE3Ljk3NjkgMTYuODA4MSAxNy45MzMgMTYuNzMyMVpNMTIuNjAzMSAxMC40ODE2TDEyLjM2NjUgMTMuNzgxOUgxMS42MzM1TDExLjQxMDQgMTAuNDgxNkgxMi42MDMxWk0xMiAxNS45ODIxQzExLjg1NDkgMTUuOTgyMSAxMS43MTMxIDE1LjkzOTEgMTEuNTkyNSAxNS44NTg0QzExLjQ3MTggMTUuNzc3OCAxMS4zNzc4IDE1LjY2MzMgMTEuMzIyMyAxNS41MjkyQzExLjI2NjggMTUuMzk1MiAxMS4yNTIyIDE1LjI0NzcgMTEuMjgwNSAxNS4xMDU0QzExLjMwODggMTQuOTYzMSAxMS4zNzg3IDE0LjgzMjQgMTEuNDgxMyAxNC43Mjk4QzExLjU4MzkgMTQuNjI3MiAxMS43MTQ2IDE0LjU1NzMgMTEuODU2OSAxNC41MjlDMTEuOTk5MiAxNC41MDA3IDEyLjE0NjcgMTQuNTE1MyAxMi4yODA3IDE0LjU3MDhDMTIuNDE0OCAxNC42MjYzIDEyLjUyOTMgMTQuNzIwMyAxMi42MDk5IDE0Ljg0MUMxMi42OTA1IDE0Ljk2MTYgMTIuNzMzNiAxNS4xMDM0IDEyLjczMzYgMTUuMjQ4NUMxMi43MzM2IDE1LjQ0MzEgMTIuNjU2MyAxNS42Mjk2IDEyLjUxODcgMTUuNzY3MkMxMi4zODExIDE1LjkwNDggMTIuMTk0NiAxNS45ODIxIDEyIDE1Ljk4MjFaIiBmaWxsPSIjRkZEMzNEIi8+PC9zdmc+)`,

    backgroundSize: [24, 24],
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right 4px center`,
  },
  danger: {
    backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgOEw4IDE2IiBzdHJva2U9IiNENzNBNDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTYgMTZMOCA4IiBzdHJva2U9IiNENzNBNDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)`,

    backgroundSize: [24, 24],
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right 4px center`,
  },

  /**
   * Compatible Components
   */
  wrapper: {
    position: "relative",
    maxWidth: "100%",
  },
  spinner: {
    position: "absolute",
    right: 4,
    top: 4,
    pointerEvents: "none",
  },
})

export const FormControlText = ({
  className,
  inputGroupProps,
  state = "default",
  ...props
}: IFormControlText) => {
  const styles = useFormControlTextStyles()
  const formControlClasses = classNames([
    styles.default,
    state !== "default" &&
      state !== "primary" &&
      state !== "loading" &&
      styles[state],
    className,
  ])
  const wrapperClasses = classNames([styles.wrapper])
  const spinnerClasses = classNames([styles.spinner])

  return (
    <FormInputGroup {...inputGroupProps}>
      <div className={wrapperClasses}>
        <input
          placeholder={placeholders.default}
          className={formControlClasses}
          {...props}
        />
        {state === "loading" && (
          <Spinner className={spinnerClasses} size="20" fill={colors.blue[6]} />
        )}
      </div>
    </FormInputGroup>
  )
}
