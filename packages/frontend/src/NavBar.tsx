import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface NavBarProps {}
interface NavBarContainerProps {
  shadow: boolean;
}
const NavBarContainer = styled.div<NavBarContainerProps>`
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  height: 60px;
  width: 100%;
  background-color: white;
  font-weight: 400;
  font-size: 18px;
  box-shadow: ${({ shadow }) =>
    shadow ? "0px 0px 5px rgba(0,0,0,0.5)" : "none"};
`;

export const NavBar = (props: NavBarProps): JSX.Element => {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const listener = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return <NavBarContainer shadow={scrollPos > 0}>My Resume</NavBarContainer>;
};
