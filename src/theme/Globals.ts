import { fonts } from "./Fonts"
import { colors } from "./Colors"
import { gutters } from "./Gutters"

export const globalStyles = {
  "@global": {
    ":root, html, body": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: "100vh",
      padding: "0",
      margin: "0",
      fontFamily: fonts.system,
      fontSize: "16px",
      lineHeight: "1.5",
      color: colors.black,
      letterSpacing: "0.008em",
      backgroundColor: "#eceeef",

      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      textRendering: "optimizeLegibility",
    },

    "*, *::before, *::after": {
      boxSizing: "border-box",
      "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
    },

    "h1, h2, h3, h4, h5, h6": {
      margin: 0,
    },

    "svg, img": {
      verticalAlign: "middle",
    },

    "a, area, button, [role='button'], input:not([type='range']), label, select, summary, textarea": {
      touchAction: "manipulation",
      "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
    },

    select: {
      appearance: "none",
    },

    [`button, input[type="submit"], input[type="reset"]`]: {
      background: "none",
      color: "inherit",
      border: "none",
      padding: 0,
      font: "inherit",
      cursor: "pointer",
      outline: "inherit",
      appearance: "none",
      textRendering: "geometricPrecision",
    },

    "input[type='radio'], input[type='checkbox']": {
      margin: 0,
    },

    "::-webkit-input-placeholder": {
      color: colors.gray[4],
    },

    ":-ms-input-placeholder": {
      color: colors.gray[4],
    },

    "::placeholder": {
      color: colors.gray[4],
    },

    template: {
      display: "none",
    },

    "[hidden]": {
      display: ["none", "!important"],
    },

    a: {
      color: colors.blue[5],
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },

    hr: {
      height: "2px",
      marginTop: gutters.default,
      marginBottom: gutters.default,
      backgroundColor: colors.blackfade15,
      border: 0,
    },
  },
}
