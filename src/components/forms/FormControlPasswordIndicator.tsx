import classNames from "classnames"
import React, { Fragment, HTMLAttributes } from "react"
import { createUseStyles } from "react-jss"
import { colors } from "../../theme"

export type IFormControlPasswordIndicatorScore = 0 | 1 | 2 | 3 | 4

export interface IFormControlPasswordIndicator
  extends HTMLAttributes<HTMLDivElement> {
  score?: IFormControlPasswordIndicatorScore
}

export const useFormControlPasswordIndicatorStyles = createUseStyles({
  default: {
    height: 18,
    display: "grid",
    gridRowGap: 2,
    gridAutoRows: "min-content",
    alignContent: "end",
  },
  pill: {
    backgroundColor: "transparent",
    borderRadius: 3,
    height: 2,
    width: 14,
  },
  color0: { backgroundColor: colors.gray[2] },
  color1: { backgroundColor: colors.red[5] },
  color2: { backgroundColor: colors.yellow[5] },
  color3: { backgroundColor: colors.orange[5] },
  color4: { backgroundColor: colors.green[5] },
})

export const FormControlPasswordIndicator = ({
  className,
  score,
  ...props
}: IFormControlPasswordIndicator) => {
  const styles = useFormControlPasswordIndicatorStyles()
  const indicatorClasses = classNames([styles.default, className])
  const pillClasses = (score: number) => {
    const index:
      | "color0"
      | "color1"
      | "color2"
      | "color3"
      | "color4" = `color${score}` as any

    return classNames([styles.pill, score !== undefined && styles[index]])
  }

  return (
    <Fragment>
      <div className={indicatorClasses} {...props}>
        {score !== undefined && (
          <Fragment>
            {score >= 4 && <i className={pillClasses(score)}></i>}
            {score >= 3 && <i className={pillClasses(score)}></i>}
            {score >= 2 && <i className={pillClasses(score)}></i>}
            {score >= 1 && <i className={pillClasses(score)}></i>}
            {score >= 0 && <i className={pillClasses(score)}></i>}
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}
