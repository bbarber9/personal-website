import React from "react";
import styled from "styled-components";

interface SpinnerProps {}
/**
 * Spinner code tweaked from https://tobiasahlin.com/spinkit/
 */

const SpinnerContainer = styled.div`
  .sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 100px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .sk-cube-grid .sk-cube {
    background-color: ${({ theme }) => theme.colors.primary.base};
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  .sk-cube-grid .sk-cube1 {
    animation-delay: 0.2s;
  }
  .sk-cube-grid .sk-cube2 {
    animation-delay: 0.3s;
  }
  .sk-cube-grid .sk-cube3 {
    animation-delay: 0.4s;
  }
  .sk-cube-grid .sk-cube4 {
    animation-delay: 0.1s;
  }
  .sk-cube-grid .sk-cube5 {
    animation-delay: 0.2s;
  }
  .sk-cube-grid .sk-cube6 {
    animation-delay: 0.3s;
  }
  .sk-cube-grid .sk-cube7 {
    animation-delay: 0s;
  }
  .sk-cube-grid .sk-cube8 {
    animation-delay: 0.1s;
  }
  .sk-cube-grid .sk-cube9 {
    animation-delay: 0.2s;
  }

  @keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
      transform: scale3D(1, 1, 1);
    }
    35% {
      transform: scale3D(0, 0, 1);
    }
  }
`;

export const Spinner = (props: SpinnerProps): JSX.Element => {
  return (
    <SpinnerContainer>
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    </SpinnerContainer>
  );
};
