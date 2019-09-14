import { RefObject, useEffect } from "react"

type ClickOutsideProps = {
  condition?: boolean
  onClickOutside: Function
  ref: RefObject<any>
}
export const useClickOutside = ({
  ref,
  condition = true,
  onClickOutside,
}: ClickOutsideProps) => {
  const handleClickOutside = (event: TouchEvent | MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target) && condition) {
      if (typeof onClickOutside === "function") {
        onClickOutside()
      }
    }
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      const clickHandler =
        "ontouchstart" in document.documentElement ? "touchstart" : "click"
      document.addEventListener(clickHandler, handleClickOutside)
      return () => {
        document.removeEventListener(clickHandler, handleClickOutside)
      }
    } else {
      return undefined
    }
  }, [handleClickOutside])
}
