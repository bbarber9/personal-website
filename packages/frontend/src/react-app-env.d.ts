/// <reference types="react-scripts" />
import "styled-components";
import type { PersonalTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends PersonalTheme {}
}
