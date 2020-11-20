import React from "react";
import styled from "styled-components";
import profile from "./profile.jpg";

interface ContactCardProps {}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  height: 300px;
  width: 100%;
`;

const ImgSection = styled.div`
  height: 100%;
  grid-column: 1/2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardImg = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 200px;
  object-fit: cover;
`;

const InfoSection = styled.div`
  grid-column: 2/3;
  height: 100%;
  padding-top: 50px;
`;

export const ContactCard = (props: ContactCardProps): JSX.Element => {
  return (
    <CardContainer>
      <ImgSection>
        <CardImg src={profile} />
      </ImgSection>
      <InfoSection>
        <h1>Breyton Barber</h1>
        <h2>Software Engineer</h2>
        <h3>Driven professional engineering</h3>
      </InfoSection>
    </CardContainer>
  );
};
