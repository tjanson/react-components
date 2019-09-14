import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { gutters } from "../../theme"
import { CollectionItem, ICollectionItem } from "./CollectionItem"

export interface ICollectionList extends HTMLAttributes<HTMLDivElement> {
  items: ICollectionItem[]
}

export const useCollectionListStyles = createUseStyles({
  defaultCollectionList: {
    padding: [0, gutters.half],
  },
})

export const CollectionList = ({
  children,
  className,
  items,
  ...props
}: ICollectionList) => {
  const { defaultCollectionList } = useCollectionListStyles()
  const collectionListClasses = classNames([defaultCollectionList, className])

  return (
    <Fragment>
      <div className={collectionListClasses} {...props}>
        {items.map((item, index) => (
          <CollectionItem {...item} key={index} />
        ))}
      </div>
    </Fragment>
  )
}
