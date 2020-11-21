import React from "react";
import styled from "styled-components";

interface AboutViewProps {}

const LargeGreenSection = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.normal};
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 5px;
  color: white;
`;

const CenterContentContainer = styled.div`
  height: 100%;
  min-height: 1px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 10px auto 10px;
  }
`;

const CenterContent = styled.div`
  grid-column: 2/3;
`;

export const AboutView = (props: AboutViewProps): JSX.Element => {
  return (
    <>
      <CenterContentContainer>
        <CenterContent>
          <h1>Hi! I'm Breyton 👋</h1>
          <LargeGreenSection>
            I'm a computer nerd who loves to make people's lives easier with
            software 🤓
          </LargeGreenSection>
          <h2>I graduated from Brigham Young University 🎓</h2>
          <p>
            I have a bachelor's degree in information technology. I spent my
            time studying how to create intuitive experiences for people using
            technology. I'm passionate about making things that are both useful
            and easy to use.
          </p>
          <h2>I'm a web developer 👨🏻‍💻</h2>
          <p>
            I love making websites because they can be consumed on almost any
            device! It's the easiest way to get your content to as many people
            as possible. I love learning and the web is always giving me new
            things to learn and master.
          </p>
          <h2>I love tech 🤖</h2>
          <p>
            My passion for using technology to help others also applies to me. I
            love finding ways that technology can improve my own life, be it a
            sweet new keyboard with fancy features or some amazing software that
            automates my life.
          </p>
          <h2>I love open source 🐙</h2>
          <p>
            I believe that open source software makes the world go 'round. If I
            can, I like to share things I make with the world, or make the
            things that are already available just a little bit better.
          </p>
        </CenterContent>
      </CenterContentContainer>
    </>
  );
};
