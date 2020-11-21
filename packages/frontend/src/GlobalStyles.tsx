import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width:100%;
    height:100%;
    margin:0;
    font-family: 'Poppins';
    font-size: 18px;
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
  a {
    text-decoration:none;
    color: ${({ theme }) => theme.colors.primary.normal};
    padding:5px;
    border-radius:3px;
    font-weight:bold;
    :hover {
      background-color: ${({ theme }) => theme.colors.layout.dark};
    }
  }
`;
