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
        </MainArea>
      </LayoutContainer>
    </>
  );
};
