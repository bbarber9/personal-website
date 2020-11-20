import React from "react";
import styled from "styled-components";
import { ContactCard } from "./ContactCard";
import { NavBar } from "./NavBar";

interface LayoutProps {}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 100%;
`;

const MainArea = styled.div`
  background-color: white;
  border-radius: 5px;
  grid-column: 2/3;
  grid-row: 1/2;
  height: 100%;
  padding-top: 60px;
`;

export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <NavBar />
      <LayoutContainer>
        <MainArea>
          <ContactCard />
          <h2 id="professional-summary">Professional Summary</h2>
          <p>
            Driven software engineer with a passion for user experience, design,
            automation, tooling, and architecture. Over 4 years experience
            creating useful and intuitive interfaces for internal and external
            projects. Innovative leader with the ability to break down tough
            problems and solve them.
          </p>
          <h2>Skills</h2>
          <p>... some skills component</p>
          <h2>Work History</h2>
          <p>... some work history component</p>
          <h2>Education</h2>
          <p>BS IN IT....</p>
          <h2>Open Source</h2>
          <p>....projects</p>
          <h2>Personal Interests</h2>
          <p>...interests</p>
          <h2>This site is made with</h2>
          <p>Some cool info</p>
        </MainArea>
      </LayoutContainer>
    </>
  );
};
