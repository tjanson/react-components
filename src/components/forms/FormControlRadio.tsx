import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { borders, colors } from "../../theme"
import { useFormLabelStyles } from "./FormLabel"
import { FormNote } from "./FormNote"

export interface IFormControlRadio extends HTMLAttributes<HTMLInputElement> {}

export const useFormControlRadioStyles = createUseStyles({
  layout: {
    padding: 10,
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: borders.radius.default,
    cursor: "pointer",
    userSelect: "none",

    "&:hover": {
      backgroundColor: colors.blackfade8,
    },
  },
  content: {
    paddingLeft: 10,
  },
  labelOverrides: {
    marginBottom: 0,
  },
  note: {
    marginTop: 0,
  },
})

export const FormControlRadio = ({
  className,
  ...props
}: IFormControlRadio) => {
  const styles = { ...useFormLabelStyles(), ...useFormControlRadioStyles() }
  const layoutClasses = classNames([styles.layout, className])
  const contentClasses = classNames([styles.content])
  const labelClasses = classNames([styles.label, styles.labelOverrides])
  const noteClasses = classNames([styles.note])

  return (
    <Fragment>
      <label className={layoutClasses}>
        <input type="radio" {...props} />
        <div className={contentClasses}>
          <span className={labelClasses}>Form label</span>
          <FormNote className={noteClasses} text="Form Note" />
        </div>
      </label>
    </Fragment>
  )
}
