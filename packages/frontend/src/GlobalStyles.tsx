import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width:100%;
    height:100%;
    margin:0;
    font-family: sans-serif;
  }
  *{
    box-sizing:border-box;
  }
`;