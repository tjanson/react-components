import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { breakpoints, gutters } from "../../theme"

export interface IContainer extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean
  flush?: boolean
}

export const useContainerStyles = createUseStyles({
  container: {
    width: "100%",
    maxWidth: "100%",
    paddingRight: gutters.default,
    paddingLeft: gutters.default,
    marginRight: "auto",
    marginLeft: "auto",

    [`@media (${breakpoints.small})`]: {
      maxWidth: "100%",
    },
    [`@media (${breakpoints.medium})`]: {
      maxWidth: "100%",
    },
    [`@media (${breakpoints.large})`]: {
      maxWidth: "980px",
    },
    [`@media (${breakpoints.xlarge})`]: {
      maxWidth: "1200px",
    },
    [`@media (${breakpoints.xxlarge})`]: {
      maxWidth: "1430px",
    },
  },
  fluid: {
    maxWidth: "100%",
  },
  flush: {
    maxWidth: "100%",
    paddingRight: 0,
    paddingLeft: 0,
  },
})

export const Container = ({
  children,
  className,
  fluid,
  flush,
  ...props
}: IContainer) => {
  const styles = useContainerStyles()

  const containerClasses = classNames([
    styles.container,
    fluid && styles.fluid,
    flush && styles.flush,
    className,
  ])

  return (
    <Fragment>
      <div className={containerClasses} {...props}>
        {children}
      </div>
    </Fragment>
  )
}
