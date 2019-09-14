import classNames from "classnames"
import React, { cloneElement, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { borders, colors, shadows } from "../../theme"

export interface IDropdownMenu extends HTMLAttributes<HTMLDivElement> {
  items: any[]
}

export const useDropdownMenuStyles = createUseStyles({
  menu: {
    backgroundColor: colors.white,
    borderRadius: borders.radius.default,
    boxShadow: shadows.depth[3],
    paddingTop: 8,
    paddingBottom: 8,
    minWidth: 200,
    flexDirection: "column",
    display: "flex",
  },
  item: {
    padding: [4, 12, 4, 12],
    fontWeight: 500,
    color: colors.blackfade70,
    textDecoration: "none",

    "&:hover": {
      backgroundColor: "#ededed",
      color: colors.black,
      textDecoration: "none",
    },
  },
  itemClickable: {
    cursor: "pointer",
  },
})

export const DropdownMenu = ({
  children,
  className,
  items,
  ...props
}: IDropdownMenu) => {
  const styles = useDropdownMenuStyles()
  const menuClasses = classNames([styles.menu, className])
  const itemClasses = classNames([styles.item, styles.itemClickable])

  return (
    <div className={menuClasses} {...props}>
      {items.map((item, index) =>
        cloneElement(item, {
          className: itemClasses,
          key: index,
        })
      )}
      {children}
    </div>
  )
}
