import React from "react";
import styled from "styled-components";

interface PhotoHeadingProps {
  imgSrc: string;
  children: React.ReactNode;
}

const Container = styled.div<PhotoHeadingProps>`
  background: url(${({ imgSrc }) => imgSrc});
  padding: 10px;
`;

export const PhotoHeading = (props: PhotoHeadingProps): JSX.Element => {
  return <Container {...props}>{props.children}</Container>;
};
