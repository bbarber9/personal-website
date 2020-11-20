import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { Layout } from "./Layout";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
