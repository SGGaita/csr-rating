// Typography constants
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#000000",
  secondary: "#ffffff",

};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius: 30,
  padding: 10,
  padding2: 12,
  button_padding: 20,

  // font sizes
  largeTitle: 35,
  h1: 28,
  h2: 22,
  h3: 18,
  h4: 16,
  body1: 16,
  body2: 14,
  body3: 12,
  body4: 10,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontFamily: "sans-serif", fontSize: SIZES.largeTitle, lineHeight: 55 },
  h1: { fontFamily: "sans-serif", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "sans-serif", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "sans-serif", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "sans-serif", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "sans-serif", fontSize: SIZES.body1, lineHeight: 30 },
  body2: { fontFamily: "sans-serif", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "sans-serif", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "sans-serif", fontSize: SIZES.body4, lineHeight: 22 },
};

export const fontWeights = {
  fn: "normal",
  fb: "bold",
  f100: "100",
  f200: "200",
  f300: "300",
  f400: "400",
  f500: "500",
  f600: "600",
  f700: "700",
  f800: "800",
  f900: "900",
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
