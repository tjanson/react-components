import classNames from "classnames"
import React, {
  cloneElement,
  createRef,
  ReactElement,
  useEffect,
  useState,
  SyntheticEvent,
  HTMLAttributes,
} from "react"
import { createUseStyles } from "react-jss"
import { DropdownMenu } from "./DropdownMenu"
import { useClickOutside } from "../../hooks/ClickOutside"

export interface IDropdown extends HTMLAttributes<HTMLDivElement> {
  menu: any
  menuDirection?: "ne" | "nw" | "se" | "sw"
  toggle: ReactElement
}

export const useDropdownStyles = createUseStyles({
  wrapper: {
    position: "relative",
    display: "inline-block",
  },
  menu: {
    display: "none",
    position: "absolute",
    marginBottom: 10,
    marginTop: 10,
    whiteSpace: "nowrap",
  },
  open: {
    display: "flex",
  },

  // Menu Directions
  ne: {
    bottom: "100%",
    left: 0,
  },
  nw: {
    bottom: "100%",
    right: 0,
  },
  se: {
    top: "100%",
    left: 0,
  },
  sw: {
    top: "100%",
    right: 0,
  },
})

export const Dropdown = ({
  className,
  menu,
  menuDirection = "se",
  toggle,
  ...props
}: IDropdown) => {
  const [open, setOpen] = useState(false)
  const styles = useDropdownStyles()
  const wrapperClasses = classNames([styles.wrapper, className])
  const menuClasses = classNames([
    styles.menu,
    styles[menuDirection],
    open && styles.open,
  ])
  const ref = createRef<HTMLDivElement>()
  useClickOutside({
    ref,
    condition: open,
    onClickOutside: () => setOpen(false),
  })

  const Toggle = () => cloneElement(toggle, { onClick: () => setOpen(!open) })

  return (
    <div className={wrapperClasses} ref={ref} {...props}>
      <Toggle />
      <DropdownMenu className={menuClasses} items={menu} />
    </div>
  )
}
