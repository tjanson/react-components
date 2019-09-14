import { colors } from "./Colors"

export const shadows = {
  depth: [
    "none",
    `0 2px 4px 0 ${colors.blackfade8}`,
    `0 4px 8px 0 ${colors.blackfade8}`,
    `0 8px 16px 0 ${colors.blackfade8}`,
    `0 16px 32px 0 ${colors.blackfade8}`,
  ],

  button: {
    default: {
      base: [
        `0 0 0 1px ${colors.gray[3]}`,
        `0 1px 2px 0 ${colors.gray[2]}`,
      ].join(","),

      hover: [
        `0 0 0 1px ${colors.gray[3]}`,
        `0 1px 2px 0 ${colors.gray[2]}`,
        `0 2px 4px 0 ${colors.gray[3]}`,
      ].join(","),
    },
  },

  box: {
    default: {
      base: `0 3px 6px 0 ${colors.blackfade15}`,
    },
  },

  focus: {
    base: `0 0 0 3px ${colors.bluefade30}`,
    success: `0 0 0 3px ${colors.greenfade30}`,
    premium: `0 0 0 3px ${colors.purplefade30}`,
    danger: `0 0 0 3px ${colors.redfade30}`,
  },

  form: {
    control: {
      default: {
        base: [
          `0 0 0 1px ${colors.blackfade10}`,
          `0 1px 2px 0 ${colors.blackfade8}`,
        ].join(","),

        active: [
          `0 0 0 1px ${colors.blackfade10}`,
          `0 1px 2px 0 ${colors.blackfade8}`,
          `0 2px 4px 0 ${colors.blackfade10}`,
        ].join(","),
      },
    },
  },
}
