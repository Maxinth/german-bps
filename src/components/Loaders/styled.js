import styled, { css } from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  position: relative;
  top: -180px;

  ${({ doShift }) =>
    doShift &&
    css`
      top: -510px;
    `}
`;

// Bouncing balls
const BouncerBox = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100px;
  /* height: 100px; */
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  /* background: #0077ff; */
  background: var(--gradientStart);
  border-radius: 50%;
  animation: bouncer 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.1s;
    opacity: 0.8;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
    opacity: 0.6;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
    opacity: 0.4;
  }

  @keyframes bouncer {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100px);
    }
  }
`;

// Spinner
const SpinBox = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
const SpinElement = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 8px solid transparent;
  /* border-top-color: #ad60f5; */
  border-top-color: var(--gradientStart);
  border-radius: 50%;
  animation: spinnerOne 1.2s linear infinite;

  &:nth-child(2) {
    border: 8px solid transparent;
    /* border-bottom-color: #ad60f5; */
    border-bottom-color: var(--gradientStart);
    animation: spinnerTwo 1.2s linear infinite;
  }

  @keyframes spinnerOne {
    0% {
      transform: rotate(0deg);
      border-width: 10px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 1px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 10px;
    }
  }
  @keyframes spinnerTwo {
    0% {
      transform: rotate(0deg);
      border-width: 1px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 10px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 1px;
    }
  }
`;

export { BouncerBox, Ball, Container, SpinBox, SpinElement };
