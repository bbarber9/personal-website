import React from "react";
import styled from "styled-components";

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface Openable {
  open: boolean;
}

const Backdrop = styled.div<Openable>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: ${({ open }) => (open ? "none" : "translateX(100%)")};
  transition: 0.3s;
`;

const Drawer = styled.div`
  position: fixed;
  height: 100%;
  width: 300px;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.neutral.light4};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.neutral.dark};
`;

export const SideDrawer = (props: SideDrawerProps): JSX.Element => {
  const { open, onClose, children } = props;
  return (
    <Backdrop open={open} onClick={onClose}>
      <Drawer>{children}</Drawer>
    </Backdrop>
  );
};
