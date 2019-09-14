import classNames from "classnames"
import React, { cloneElement, Fragment, HTMLAttributes, ReactNode } from "react"
import { createUseStyles } from "react-jss"
import { borders, colors, gutters, shadows } from "../../theme"

export interface ICollectionItem extends HTMLAttributes<HTMLDivElement> {
  body?: ReactNode | string
  headline?: ReactNode | string
  link?: any
  photoUrl?: string
  type?: "list" | "grid"
}

const transitionDuration = "300ms"
const transitionTimingFunction = "0.215, 0.61, 0.355, 1"

export const useCollectionItemStyles = createUseStyles({
  defaultCollectionItem: {
    position: "relative",
    margin: [0, `-${gutters.half}`],
  },
  defaultCollectionItemWrap: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    height: "100%",
    color: colors.black,
    textDecoration: "none",
    borderRadius: "4px",

    "& > *": {
      zIndex: 1,
    },

    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
      content: '""',
      opacity: 0,
      transform: "scale(0.92)",
      backgroundColor: colors.white,
      transition: `transform ${transitionDuration} cubic-bezier(${transitionTimingFunction}), opacity ${transitionDuration} cubic-bezier(${transitionTimingFunction})`,

      background: colors.white,
      border: 0,
      boxShadow: shadows.box.default.base,
      borderRadius: borders.radius.default,
    },

    "&:hover, &:focus": {
      "&::after": {
        opacity: 1,
        transform: "scale(1)",
      },

      "&:hover $defaultCollectionItemPhoto": {
        clipPath: "inset(0 0 0 0 round 4px 0 0 4px)",
        "-webkit-clip-path": "inset(0 0 0 0 round 4px 0 0 4px)",
      },
    },
  },
  defaultCollectionItemWrapGrid: {
    flexDirection: "column",

    "&:hover $defaultCollectionItemPhoto": {
      clipPath: ["inset(0 0 0 0 round 4px 4px 0 0)", "!important"],
      "-webkit-clip-path": ["inset(0 0 0 0 round 4px 4px 0 0)", "!important"],
    },
  },
  defaultCollectionItemFigure: {
    flex: "0 0 25%",
    width: "100%",
  },
  defaultCollectionItemPhoto: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingTop: "56.25%",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    transition: `clip-path ${transitionDuration} cubic-bezier(${transitionTimingFunction}), -webkit-clip-path ${transitionDuration} cubic-bezier(${transitionTimingFunction})`,
    clipPath: "inset(20px 20px 20px 20px round 4px 4px 4px 4px)",
    "-webkit-clip-path": "inset(20px 20px 20px 20px round 4px 4px 4px 4px)",
  },
  defaultCollectionItemContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-start",
    padding: [gutters.default, 25, gutters.default],
  },
  defaultCollectionItemHeadline: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "1.5",
  },
  defaultCollectionItemBody: {
    fontSize: "15px",
    color: colors.gray[4],
    marginTop: gutters.half,
  },
})

export const CollectionItem = ({
  body,
  children,
  className,
  headline,
  link,
  photoUrl,
  type = "list",
  ...props
}: ICollectionItem) => {
  const {
    defaultCollectionItem,
    defaultCollectionItemWrap,
    defaultCollectionItemWrapGrid,
    defaultCollectionItemFigure,
    defaultCollectionItemPhoto,
    defaultCollectionItemContent,
    defaultCollectionItemHeadline,
    defaultCollectionItemBody,
  } = useCollectionItemStyles()

  const collectionItemClasses = classNames([defaultCollectionItem, className])
  const wrapClasses = classNames([
    defaultCollectionItemWrap,
    type === "grid" && defaultCollectionItemWrapGrid,
  ])
  const figureClasses = classNames([defaultCollectionItemFigure])
  const photoClasses = classNames([defaultCollectionItemPhoto])
  const contentClasses = classNames([defaultCollectionItemContent])
  const headlineClasses = classNames([defaultCollectionItemHeadline])
  const bodyClasses = classNames([defaultCollectionItemBody])

  const ContentBase = () => {
    return (
      <Fragment>
        {!!photoUrl && (
          <div className={figureClasses}>
            <div
              className={photoClasses}
              style={{
                backgroundImage: `url(${photoUrl})`,
              }}
            />
          </div>
        )}
        <div className={contentClasses}>
          {!!headline && <div className={headlineClasses}>{headline}</div>}
          {!!body && <div className={bodyClasses}>{body}</div>}
        </div>
      </Fragment>
    )
  }
  const WrappedContent = () => {
    if (!!link) {
      return cloneElement(link, {
        children: <ContentBase />,
        className: wrapClasses,
      })
    }

    return (
      <div className={wrapClasses}>
        <ContentBase />
      </div>
    )
  }

  return (
    <Fragment>
      <div className={collectionItemClasses} {...props}>
        <WrappedContent />
      </div>
    </Fragment>
  )
}
