import React from "react";
import styled from "styled-components";
import { WorkHistory } from "./WorkHistory";

interface ResumeViewProps {}

export const ResumeView = (props: ResumeViewProps): JSX.Element => {
  return (
    <>
      <h2 id="professional-summary">Professional Summary</h2>
      <p>
        Driven software engineer with a passion for user experience, design,
        automation, tooling, and architecture. Over 4 years experience creating
        useful and intuitive interfaces for internal and external projects.
        Innovative leader with the ability to break down tough problems and
        solve them.
      </p>
      <h2>Skills</h2>
      <h3>Web Languages</h3>
      <p>TypeScript, Javascript (Browser + Node.js), HTML, CSS</p>
      <h3>Web Frameworks</h3>
      <p>React, Redux, AngularJS, Express, Styled Components</p>
      <h3>Tooling</h3>
      <p>
        Webpack, Lerna, Babel, TypeScript, Git/Github, ESLint, Prettier, NPM
      </p>
      <h3>Leadership</h3>
      <p>
        Determining and managing scope, Communicating technical topics in a
        non-technical manner, Breaking down large problems
      </p>
      <h2>Work History</h2>
      <WorkHistory />
      <h2>Education</h2>
      <h3>Brigham Young University</h3>
      <p>Bachelor of Science: Information Technology</p>
    </>
  );
};
