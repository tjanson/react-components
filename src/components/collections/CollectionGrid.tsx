import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { breakpoints, gutters } from "../../theme"
import { CollectionItem, ICollectionItem } from "./CollectionItem"

export interface ICollectionGrid extends HTMLAttributes<HTMLDivElement> {
  items: ICollectionItem[]
}

export const useCollectionGridStyles = createUseStyles({
  defaultCollectionGrid: {
    padding: [0, gutters.half],
    display: "grid",
    gridGap: gutters.default,

    [`@media (${breakpoints.medium})`]: {
      gridTemplateColumns: `repeat(2, 1fr)`,
    },
    [`@media (${breakpoints.large})`]: {
      gridTemplateColumns: `repeat(3, 1fr)`,
    },
  },
})

export const CollectionGrid = ({
  children,
  className,
  items,
  ...props
}: ICollectionGrid) => {
  const { defaultCollectionGrid } = useCollectionGridStyles()
  const collectionListClasses = classNames([defaultCollectionGrid, className])

  return (
    <Fragment>
      <div className={collectionListClasses} {...props}>
        {items.map((item, index) => (
          <CollectionItem {...item} key={index} type="grid" />
        ))}
      </div>
    </Fragment>
  )
}
