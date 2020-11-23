interface ColorMap {
  dark4: string;
  dark3: string;
  dark2: string;
  dark: string;
  base: string;
  light: string;
  light2: string;
  light3: string;
  light4: string;
}

interface ThemeColors {
  neutral: ColorMap;
  primary: ColorMap;
  accent: ColorMap;
  error: ColorMap;
  warn: ColorMap;
}

interface ThemeElevation {
  low: string;
  high: string;
}

const fillColorMap = (colors: Partial<ColorMap>): ColorMap => {
  const emptyMap: ColorMap = {
    dark4: "white",
    dark3: "white",
    dark2: "white",
    dark: "white",
    base: "white",
    light: "white",
    light2: "white",
    light3: "white",
    light4: "white",
  };
  return { ...emptyMap, ...colors };
};

export interface PersonalTheme {
  colors: ThemeColors;
  elevation: ThemeElevation;
}

export const theme: PersonalTheme = {
  colors: {
    neutral: fillColorMap({}),
    primary: fillColorMap({}),
    accent: fillColorMap({}),
    error: fillColorMap({}),
    warn: fillColorMap({}),
  },
  elevation: {
    high: "",
    low: "",
  },
};
