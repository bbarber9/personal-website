import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavBarProps {}
interface NavBarContainerProps {
  shadow: boolean;
}
const NavBarContainer = styled.div<NavBarContainerProps>`
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  height: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.light4};
  font-size: 18px;
  box-shadow: ${({ shadow }) =>
    shadow ? "0px 0px 5px rgba(0,0,0,0.5)" : "none"};
  transition: box-shadow 0.05s ease-in;
`;

const LogoText = styled.span`
  font-family: "Share Tech Mono";
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -3px;
`;

const LinkSpace = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  padding-right: 10px;
`;

export const NavBar = (props: NavBarProps): JSX.Element => {
  const [showShadow, setShowShadow] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY <= 0) {
        setShowShadow(false);
        return;
      }
      setShowShadow(true);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
    <NavBarContainer shadow={showShadow}>
      <LogoText>breyton.dev</LogoText>
      <LinkSpace>
        <Link to="/">About</Link>
        {/* <Link to="/resume">Resume</Link> */}
      </LinkSpace>
    </NavBarContainer>
  );
};
