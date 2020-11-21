import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FontStyles } from "./fonts/fonts";
import { GlobalStyles } from "./GlobalStyles";
import { Layout } from "./Layout";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
