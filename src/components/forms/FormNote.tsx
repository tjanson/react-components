import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { colors } from "../../theme"

export interface IFormNote extends HTMLAttributes<HTMLParagraphElement> {
  text?: string
}

export const useFormNoteStyles = createUseStyles({
  default: {
    fontSize: 13,
    lineHeight: "20px",
    marginTop: 6,
    marginBottom: 0,
    fontWeight: 400,
    color: colors.gray[5],
  },
})

export const FormNote = ({
  children,
  className,
  text,
  ...props
}: IFormNote) => {
  const styles = useFormNoteStyles()
  const FormNoteClasses = classNames([styles.default, className])

  return (
    <p className={FormNoteClasses} {...props}>
      {text}
      {children}
    </p>
  )
}
