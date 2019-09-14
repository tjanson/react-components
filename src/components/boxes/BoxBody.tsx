import classNames from "classnames"
import React, { HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"

export interface IBoxBody extends HTMLAttributes<HTMLDivElement> {}

export const useBoxBodyStyles = createUseStyles({
  default: {
    padding: [12, 16],
  },
})

export const BoxBody = ({ children, className, ...props }: IBoxBody) => {
  const styles = useBoxBodyStyles()
  const boxBodyClasses = classNames([styles.default, className])

  return (
    <div className={boxBodyClasses} {...props}>
      {children}
    </div>
  )
}
