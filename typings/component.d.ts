import { IContainer } from "../src/components/container/Container"

/**
 * Standardized Component size variant states
 */
export type Sizes = "thin" | "small" | "medium" | "large"

/**
 * Standardized Component color variant states
 */
export type States = "default" | "primary" | "success" | "premium" | "danger"

/**
 * Components that wrap inner contents with a <Container /> component
 */
export interface ComponentWithContainer {
  container: IContainer
}

/**
 * Components that support having an additional note
 */
export interface ComponentWithNote {
  note?: string | React.ReactNode
  noteClassName?: string
}

/**
 * Components that have support for different sizings
 */
export interface ComponentWithSizes {
  size?: Sizes
}

/**
 * Components that have support for non-standard sizings
 */
export interface ComponentWithCustomSizes<T = {}> {
  size?: Sizes | T
}

/**
 * Components that have support for coloured states
 */
export interface ComponentWithStates {
  state?: States
}

/**
 * Components that have support for non-standard coloured states
 */
export interface ComponentWithCustomStates<T = {}> {
  state?: States | T
}

/**
 * Components that support having a spinner
 */
export interface ComponentWithSpinner {
  spinner?: boolean
  spinnerClassName?: string
  spinnerSize?: string | number
  spinnerFill?: string
}
