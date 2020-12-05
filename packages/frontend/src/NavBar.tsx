import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { SideDrawer } from "./SideDrawer";
import { GITHUB_LINK, LINKEDIN_LINK, MOBILE_THRESHOLD } from "./constants";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface NavBarProps {}
interface NavBarContainerProps {
  shadow: boolean;
}
const NavBarContainer = styled.nav<NavBarContainerProps>`
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
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
  display: flex;
  padding-right: 10px;
  font-size: 20px;

  & svg {
    font-size: 24px;
  }

  & > * {
    margin-right: 30px;
    :last-child {
      margin-right: 0px;
    }
  }
`;

const HamButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.neutral.light4};
  color: ${({ theme }) => theme.colors.primary.base};
  padding: 5px;
  font-size: 24px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.neutral.light};
  }
`;

const MenuItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 5px;
`;

const MenuHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  font-size: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.base};
`;

const MenuItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  font-size: 24px;
`;

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spacer = styled.span`
  width: 10px;
`;

export const NavBar = (props: NavBarProps): JSX.Element => {
  const [showShadow, setShowShadow] = useState(false);
  const [useHamburger, setUseHamburger] = useState(
    window.innerWidth < MOBILE_THRESHOLD
  );

  const links = [
    ["/", "About"],
    ["/resume", "Resume"],
  ];
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  // Add shadow on scroll
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
  }, []);

  // Switch to hamburger menu at certain width
  useEffect(() => {
    const listener = () => {
      if (window.innerWidth < MOBILE_THRESHOLD) {
        setUseHamburger(true);
        return;
      }
      setUseHamburger(false);
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
  return (
    <NavBarContainer shadow={showShadow}>
      <LogoText>breyton.dev</LogoText>
      <SideDrawer
        open={hamburgerOpen}
        onClose={() => {
          setHamburgerOpen(false);
        }}
      >
        <MenuItemContainer>
          <MenuHeader>Quick Links</MenuHeader>
          {links.map((link) => {
            return (
              <MenuItem key={link[0]}>
                <Link to={link[0]}>{link[1]}</Link>
              </MenuItem>
            );
          })}
          <MenuItem>
            <IconLink href={LINKEDIN_LINK} target="blank" rel="noreferrer">
              <SiLinkedin />
            </IconLink>
            <Spacer />
            <IconLink href={GITHUB_LINK} target="blank" rel="noreferrer">
              <SiGithub />
            </IconLink>
          </MenuItem>
        </MenuItemContainer>
      </SideDrawer>
      {useHamburger ? (
        <>
          <HamButton
            onClick={() => {
              setHamburgerOpen(true);
            }}
          >
            <FiMenu />
          </HamButton>
        </>
      ) : (
        <LinkSpace>
          {links.map((link) => (
            <Link to={link[0]}>{link[1]}</Link>
          ))}
          <IconLink href={LINKEDIN_LINK} target="blank" rel="noreferrer">
            <SiLinkedin />
          </IconLink>
          <IconLink href={GITHUB_LINK} target="blank" rel="noreferrer">
            <SiGithub />
          </IconLink>
        </LinkSpace>
      )}
    </NavBarContainer>
  );
};
