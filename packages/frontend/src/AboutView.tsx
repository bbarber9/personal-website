import React from "react";
import styled from "styled-components";
import { MOBILE_THRESHOLD } from "./constants";
import ProfilePic from "./images/ProfilePic.jpeg";

interface AboutViewProps {}

const LargeGreenSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.base};
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.neutral.light4};
  box-shadow: -3px 3px ${({ theme }) => theme.colors.primary.dark2};
`;

const FlexHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: "title image";
  @media (max-width: ${() => MOBILE_THRESHOLD}px) {
    grid-template-areas:
      "title"
      "image";
  }
  padding-bottom: 10px;
`;

const FlexTitle = styled.h1`
  @media (max-width: ${() => MOBILE_THRESHOLD}px) {
    justify-self: center;
    align-self: center;
  }
`;

const FlexImg = styled.img`
  justify-self: center;
  align-self: center;
  max-height: 300px;
  object-fit: cover;
  border-radius: 5px;
`;

export const AboutView = (props: AboutViewProps): JSX.Element => {
  return (
    <>
      <FlexHeader>
        <FlexTitle>Hi! I'm Breyton 👋</FlexTitle>
        <FlexImg src={ProfilePic} />
      </FlexHeader>
      <LargeGreenSection>
        I'm a computer nerd who loves to make people's lives easier with
        technology.
      </LargeGreenSection>
      <h2>I graduated from Brigham Young University 🎓</h2>
      <p>
        I have a bachelor's degree in information technology. I spent my time
        studying how to create intuitive experiences for people using
        technology. I'm passionate about making things that are both useful and
        easy to use.
      </p>
      <h2>I'm a web developer 👨🏻‍💻</h2>
      <p>
        I love making websites because they can be consumed on almost any
        device! It's the easiest way to get your content to as many people as
        possible. I love learning and the web always gives me new things to
        learn and master.
      </p>
      <h2>I love tech 🤖</h2>
      <p>
        My passion for using technology to help others also applies to me. I
        love finding ways that technology can improve my own life, be it a sweet
        new keyboard with fancy features or some amazing software that automates
        my life.
      </p>
      <h2>I love open source 🐙</h2>
      <p>
        I believe that open source software makes the world go 'round. If I can,
        I like to share things I make with the world, or make things that are
        already available just a little bit better.
      </p>
    </>
  );
};
