import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root{
    width:100%;
    height:100%;
    margin:0;
    font-family: 'Poppins';
    font-size: 18px;
    color: ${({ theme }) => theme.colors.neutral.dark4};
    background-color:${({ theme }) => theme.colors.neutral.light4};
  }
  *{
    box-sizing:border-box;
  }
  h1 {
    font-weight:normal;
  }
  h2 {
    font-weight:normal;
    margin: 20px 0px;
    border-bottom:  2px solid ${({ theme }) => theme.colors.primary.base};
  }
  h3 {
    font-weight:300;
    margin-bottom:0px;
    color:${({ theme }) => theme.colors.primary.base};
  }
  h4 {
    margin: 10px 0px;
  }
  p {
    margin: 5px 0px; 
  }
  a {
    text-decoration:none;
    color: ${({ theme }) => theme.colors.primary.base};
  }
`;
