import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width:100%;
    height:100%;
    margin:0;
    font-family: 'Poppins';
    color: ${({ theme }) => theme.colors.text.normal};
  }
  *{
    box-sizing:border-box;
  }
  h1 {
    font-weight:normal;
  }
  h2 {
    font-weight:normal;
  }
  h3 {
    font-weight:normal;
  }
`;
