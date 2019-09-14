import classNames from "classnames"
import React, {
  cloneElement,
  createRef,
  HTMLAttributes,
  ReactElement,
  useState,
} from "react"
import { createUseStyles } from "react-jss"
import { useClickOutside } from "../../hooks/ClickOutside"
import { colors } from "../../theme"
import { Box } from "../boxes/Box"
import { BoxBody } from "../boxes/BoxBody"
import { Button } from "../buttons/Button"
import { Container } from "../container/Container"

export interface IModal extends HTMLAttributes<HTMLDivElement> {
  dialog: ReactElement
  maxWidth?: number | string
  title?: string
  toggle: ReactElement
}

export const useModalStyles = createUseStyles({
  wrapper: {},
  overlay: {
    backgroundColor: colors.blackfade50,
    position: "fixed",
    display: "none",
    content: "",
    zIndex: 49,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  dialog: {
    position: "fixed",
    display: "none",
    paddingTop: 80,
    zIndex: 50,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  open: {
    display: "block",
  },
})

export const Modal = ({
  className,
  dialog,
  maxWidth,
  title,
  toggle,
  ...props
}: IModal) => {
  const [open, setOpen] = useState(false)
  const styles = useModalStyles()
  const wrapperClasses = classNames([styles.wrapper, className])
  const overlayClasses = classNames([styles.overlay, open && styles.open])
  const dialogClasses = classNames([styles.dialog, open && styles.open])
  const ref = createRef<HTMLDivElement>()

  useClickOutside({
    ref,
    condition: open,
    onClickOutside: () => setOpen(false),
  })

  const Toggle = () => cloneElement(toggle, { onClick: () => setOpen(!open) })
  const Close = () => (
    <Button text="Close" onClick={() => setOpen(!open)}></Button>
  )

  return (
    <div className={wrapperClasses} {...props}>
      <Toggle />
      <div className={overlayClasses}></div>
      <div className={dialogClasses}>
        <Container style={{ maxWidth }}>
          <div ref={ref}>
            <Box title={title}>
              <BoxBody>{dialog}</BoxBody>
              <BoxBody>
                <Close />
              </BoxBody>
            </Box>
          </div>
        </Container>
      </div>
    </div>
  )
}
