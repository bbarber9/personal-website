/// <reference types="react-scripts" />
import "styled-components";
import { ResumeTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends ResumeTheme {}
}
