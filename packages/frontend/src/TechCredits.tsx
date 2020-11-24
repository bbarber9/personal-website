import React from "react";
import styled from "styled-components";

import { SiReact, SiTypescript, SiStyledComponents } from "react-icons/si";
import { GITHUB_LINK } from "./constants";

interface TechCreditsProps {}

const Container = styled.div`
  margin-top: 200px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreditContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.neutral.base};
  font-size: 60px;
`;

const Heading = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.neutral.base};
`;

const CreditIcon = styled.div`
  margin-right: 30px;
  :last-child {
    margin-right: 0px;
  }
`;

export const TechCredits = (props: TechCreditsProps): JSX.Element => {
  return (
    <Container>
      <Heading>This site is made with</Heading>
      <CreditContainer>
        <CreditIcon>
          <SiReact />
        </CreditIcon>
        <CreditIcon>
          <SiTypescript />
        </CreditIcon>
        <CreditIcon>
          <SiStyledComponents />
        </CreditIcon>
      </CreditContainer>
      <a href={GITHUB_LINK} target="_blank" rel="noreferrer">
        View the code on GitHub
      </a>
    </Container>
  );
};
