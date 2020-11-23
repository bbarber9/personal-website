export interface ColorMap {
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

export interface ThemeColors {
  neutral: ColorMap;
  primary: ColorMap;
  accent: ColorMap;
  error: ColorMap;
}

interface ThemeElevation {
  low: string;
  high: string;
}

const fillColorMap = (colors: Partial<ColorMap> = {}): ColorMap => {
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

const themeColors: ThemeColors = {
  neutral: {
    dark4: "hsl(191,7%,11%)",
    dark3: "hsl(201,6%,20%)",
    dark2: "hsl(196,4%,38%)",
    dark: "hsl(196,4%,45%)",
    base: "hsl(192,5%,62%)",
    light: "hsl(192,5%,70%)",
    light2: "hsl(192,9%,84%)",
    light3: "hsl(192,12%,90%)",
    light4: "hsl(177,20%,97%)",
  },
  primary: {
    dark4: "hsl(137,39%,20%)",
    dark3: "hsl(137,45%,25%)",
    dark2: "hsl(140,60%,28%)",
    dark: "hsl(140,60%,32%)",
    base: "hsl(143,92%,35%)",
    light: "hsl(148,92%,42%)",
    light2: "hsl(146,80%,55%)",
    light3: "hsl(143,75%,75%)",
    light4: "hsl(137,70%, 87%)",
  },
  accent: {
    dark4: "hsl(252,100%,18%)",
    dark3: "hsl(252,90%,22%)",
    dark2: "hsl(252,80%,30%)",
    dark: "hsl(252,75%,35%)",
    base: "hsl(252,65%,45%)",
    light: "hsl(252,70%,58%)",
    light2: "hsl(252,80%,70%)",
    light3: "hsl(252,90%,83%)",
    light4: "hsl(252,100%,92%)",
  },
  error: {
    dark4: "hsl(0,80%,26%)",
    dark3: "hsl(0,76%,32%)",
    dark2: "hsl(0,72%,40%)",
    dark: "hsl(0,68%,45%)",
    base: "hsl(0,68%,50%)",
    light: "hsl(0,80%,60%)",
    light2: "hsl(0,100%,70%)",
    light3: "hsl(0,100%,83%)",
    light4: "hsl(0,100%,89%)",
  },
};

export const theme: PersonalTheme = {
  colors: themeColors,
  elevation: {
    high: "",
    low: "",
  },
};
