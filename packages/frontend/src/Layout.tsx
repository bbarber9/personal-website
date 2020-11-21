import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ContactCard } from "./ContactCard";
import { NavBar } from "./NavBar";
import { ResumeView } from "./ResumeView";
import { AboutView } from "./AboutView";

interface LayoutProps {}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
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
          <Switch>
            <Route exact path="/">
              <AboutView />
            </Route>
            <Route path="/resume">
              <ResumeView />
            </Route>
          </Switch>
        </MainArea>
      </BrowserRouter>
    </>
  );
};
