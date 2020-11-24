import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ResumeView } from "./ResumeView";
import { AboutView } from "./AboutView";
import { ColorPalette } from "./ColorPalette";
import { TechCredits } from "./TechCredits";
import { MOBILE_THRESHOLD, WIDESCREEN_THRESHOLD } from "./constants";

interface LayoutProps {}

const CenterContentContainer = styled.div`
  height: 100%;
  min-height: 1px;
  display: grid;
  grid-template-columns: auto 1400px auto;
  @media (max-width: ${() => MOBILE_THRESHOLD}px) {
    grid-template-columns: 10px auto 10px;
  }
  @media (max-width: ${() => WIDESCREEN_THRESHOLD}px) {
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

const CenterContent = styled.div`
  grid-column: 2/3;
`;

const MainArea = styled.div`
  height: 100%;
  padding-top: 60px;
`;

export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <MainArea>
          <CenterContentContainer>
            <CenterContent>
              <Switch>
                <Route exact path="/">
                  <AboutView />
                </Route>
                <Route path="/theme">
                  <ColorPalette />
                </Route>
                <Route path="/resume">
                  <ResumeView />
                </Route>
              </Switch>
              <TechCredits />
            </CenterContent>
          </CenterContentContainer>
        </MainArea>
      </BrowserRouter>
    </>
  );
};
