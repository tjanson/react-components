import jss from "jss"
import preset from "jss-preset-default"
import React, { Fragment, FunctionComponent, useEffect } from "react"
import { JssProvider, SheetsRegistry, ThemeProvider } from "react-jss"
import { globalStyles } from "../theme/Globals"

export interface IUserInterfaceProps {
  classNamePrefix?: string
  theme?: object
}

export const UserInterface: FunctionComponent<IUserInterfaceProps> = ({
  classNamePrefix,
  children,
  theme = {},
}) => {
  const handleTabNavigation = (event: KeyboardEvent) => {
    if (typeof document !== "undefined") {
      if (event.code === "Tab") {
        document.body.classList.add("keyboard-navigation")
      }
    }
  }
  const handleBodyClick = () => {
    if (typeof document !== "undefined") {
      document.body.classList.remove("keyboard-navigation")
    }
  }
  useEffect(() => {
    document.addEventListener("keyup", handleTabNavigation)
    document.addEventListener("click", handleBodyClick)

    return () => {
      document.removeEventListener("keyup", handleTabNavigation)
      document.removeEventListener("click", handleBodyClick)
    }
  }, [])

  const setupJss = () => {
    jss.setup(preset())

    const sheetsRegistry = new SheetsRegistry()
    const globalStyleSheet = jss.createStyleSheet(globalStyles).attach()

    sheetsRegistry.add(globalStyleSheet)

    return sheetsRegistry
  }

  const sheets = setupJss()

  return (
    <Fragment>
      <JssProvider
        id={{ minify: true }}
        registry={sheets}
        classNamePrefix={classNamePrefix || "ui-"}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </JssProvider>
    </Fragment>
  )
}
