interface ColorMap {
  dark: string;
  normal: string;
  light: string;
}

interface ThemeColors {
  text: ColorMap;
  primary: ColorMap;
  layout: ColorMap;
}

interface ThemeElevation {
  low: string;
  high: string;
}

export interface ResumeTheme {
  colors: ThemeColors;
  elevation: ThemeElevation;
}

export const theme: ResumeTheme = {
  colors: {
    text: { dark: "#0F0F10", normal: "#272635", light: "#808189" },
    primary: {
      dark: "#2B5297",
      normal: "#4C7BCD",
      light: "#71A5FE",
    },
    layout: {
      dark: "#EAEBF2",
      normal: "white",
      light: "white",
    },
  },
  elevation: {
    high: "",
    low: "",
  },
};
