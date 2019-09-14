import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import {
  ComponentWithSizes,
  ComponentWithSpinner,
  ComponentWithStates,
} from "../../../typings/component"
import { borders, colors, fonts, shadows, transitions } from "../../theme"
import { Spinner } from "../loaders/Spinner"

export interface IButton
  extends HTMLAttributes<HTMLButtonElement>,
    ComponentWithStates,
    ComponentWithSizes,
    ComponentWithSpinner {
  block?: boolean
  fill?: boolean
  text?: string
}

export const useButtonStyles = createUseStyles({
  default: {
    // Display as a flexbox container for easier positioning of icons
    display: "inline-flex",
    flex: "0 0 auto",

    // Explicit padding
    padding: [4, 8],
    fontFamily: fonts.system,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",

    // Slightly dimmed out color, we increase this to black on hover
    color: colors.blackfade70,

    // Align inner text to the center of the component
    textAlign: "center",

    // Remove underline on anchors
    textDecoration: "none",

    // Disable word breaking inside of the button
    wordBreak: "keep-all",
    whiteSpace: "nowrap",

    // Prevent a click delay for buttons on touch-enabled devices
    touchAction: "manipulation",

    // Pointer to suggest a button is actionable
    cursor: "pointer",

    // Disable click-and-drag text selection
    userSelect: "none",

    // Remove the background
    backgroundColor: colors.white,

    // Reset any borders
    border: 0,

    // Rounded corners of 4px
    borderRadius: borders.radius.default,

    // Remove the default (ugly) outline, we have a special outline for buttons
    outline: 0,

    // Apply a subtle box-shadow for additional click context
    boxShadow: shadows.button.default.base,

    // Ease in state changes
    transition: transitions.button,

    // Remove brower-default styles applied to <button> elements
    appearance: "none",

    // Hover state
    "&:hover": {
      color: colors.black,
      boxShadow: shadows.button.default.hover,
    },

    // Custom accessibility :focus state shadow
    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.base].join(","),
    },

    // Custom :active shadow
    // Provides the feeling of "pressing" the element into the page
    "&:active": {
      color: colors.black,
      boxShadow: shadows.button.default.base,
      transform: "scale(0.97)",
    },
  },

  /**
   * Size Variants
   */
  thin: {
    padding: [3, 6],
  },
  medium: {
    padding: [7, 9],
    fontSize: 16,
  },
  large: {
    padding: [9, 14],
    fontSize: 18,
  },

  /**
   * Color Variants
   */
  primary: {
    color: colors.bluefade70,

    "&:hover": {
      color: colors.blue[6],
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.base].join(","),
    },

    "&:active": {
      color: colors.blue[6],
      boxShadow: shadows.button.default.base,
    },
  },
  success: {
    color: colors.greenfade70,

    "&:hover": {
      color: colors.green[5],
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.success].join(","),
    },

    "&:active": {
      color: colors.green[5],
      boxShadow: shadows.button.default.base,
    },
  },
  premium: {
    color: colors.purplefade70,

    "&:hover": {
      color: colors.purple[5],
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.premium].join(","),
    },

    "&:active": {
      color: colors.purple[5],
      boxShadow: shadows.button.default.base,
    },
  },
  danger: {
    color: colors.redfade70,

    "&:hover": {
      color: colors.red[5],
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.danger].join(","),
    },

    "&:active": {
      color: colors.red[5],
      boxShadow: shadows.button.default.base,
    },
  },

  defaultFill: {
    color: colors.whitefade70,
    backgroundColor: colors.black,

    "&:hover": {
      color: colors.white,
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.base].join(","),
    },

    "&:active": {
      color: colors.white,
      boxShadow: shadows.button.default.base,
    },
  },
  primaryFill: {
    color: colors.whitefade70,
    backgroundColor: colors.blue[6],

    "&:hover": {
      color: colors.white,
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.base].join(","),
    },

    "&:active": {
      color: colors.white,
      boxShadow: shadows.button.default.base,
    },
  },
  successFill: {
    color: colors.whitefade70,
    backgroundColor: colors.green[5],

    "&:hover": {
      color: colors.white,
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.success].join(","),
    },

    "&:active": {
      color: colors.white,
      boxShadow: shadows.button.default.base,
    },
  },
  premiumFill: {
    color: colors.whitefade70,
    backgroundColor: colors.purple[5],

    "&:hover": {
      color: colors.white,
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.premium].join(","),
    },

    "&:active": {
      color: colors.white,
      boxShadow: shadows.button.default.base,
    },
  },
  dangerFill: {
    color: colors.whitefade70,
    backgroundColor: colors.red[5],

    "&:hover": {
      color: colors.white,
    },

    "body.keyboard-navigation &:focus": {
      boxShadow: [shadows.button.default.base, shadows.focus.danger].join(","),
    },

    "&:active": {
      color: colors.white,
      boxShadow: shadows.button.default.base,
    },
  },

  /**
   * Display Modifiers
   */
  block: {
    width: "100%",
    display: "block",
  },
  disabled: {
    opacity: "0.5",
    pointerEvents: "none",
    boxShadow: shadows.button.default.base,
  },

  /**
   * Compatible Components
   */
  spinner: {
    marginLeft: -4,
    marginRight: 4,
  },
})

export const Button = ({
  block = false,
  children,
  className,
  state = "default",
  fill = false,
  size = "small",
  spinner = false,
  spinnerClassName,
  text,
  ...props
}: IButton) => {
  const styles = useButtonStyles()
  const index:
    | "primaryFill"
    | "successFill"
    | "premiumFill"
    | "dangerFill" = `${state}Fill` as any

  const buttonClasses = classNames([
    styles.default,
    state !== "default" && fill === false && styles[state],
    fill === true && styles[index],
    size !== "small" && styles[size],
    block && styles["block"],
    className,
  ])
  const spinnerClasses = classNames([styles.spinner, spinnerClassName])

  return (
    <Fragment>
      <button className={buttonClasses} {...props}>
        {spinner && <Spinner size="20" className={spinnerClasses} />}
        {!!text && <span>{text}</span>}
        {children}
      </button>
    </Fragment>
  )
}
