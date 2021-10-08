import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.aside`
  /* background-color: var(--themeDarkColor); */
  background-color: #333;
  color: #fff;
  width: 230px;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  /* position: absolute; */
  position: fixed;
  /* border-top-right-radius: 100px; */
  /* border-bottom-right-radius: 100px; */
  border: 5px ridge #fff;
  /* border-bottom: 5px ridge transparent; */
  border-left: 5px ridge transparent;
  /* opacity: 0.9;
  backdrop-filter: blur(3px); */
  /* position: relative;
  z-index: 400; */
  top: 0;
  left: 0;
  right: 0;
  z-index: 300;
  font-family: "Open Sans", sans-serif;
  margin-top: 4rem;
  transform: translate(-100%);
  transition: all 0.2s;

  ${({ isInView }) =>
    isInView &&
    css`
      transform: translate(0%);
    `}

  @media (min-width: 768px) {
    width: 310px;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 90px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0.5rem;
  ${({ col }) =>
    col &&
    css`
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      padding: 1rem;
      max-width: 200px;
      max-height: 160px;
      margin: 0 auto;
      border-radius: 5px;
      flex-direction: column;
      background: linear-gradient(
        to bottom right,
        var(--gradientStart),
        var(--gradientEnd)
      );
      box-shadow: rgba(255, 255, 255, 0.07) 0px 2px 2px 0px,
        rgba(255, 255, 255, 0.1) 0px 3px 1px -2px,
        rgba(255, 255, 255, 0.06) 0px 1px 5px 0px;

      @media (min-width: 768px) {
        max-width: 200px;
        max-height: 180px;
      }
    `}
`;

const LinksContainer = styled.ul`
  max-height: 300px;
  margin-bottom: 1rem;
`;

const LinkText = styled.span`
  color: #fff;
`;

const PageLink = styled(NavLink)`
  padding: 0.8rem 1rem;
  /* background-color: #fff; */
  display: flex;
  align-items: center;
  text-transform: capitalize;
  transition: all 0.2s;
  & > svg {
    margin-right: 0.5rem;
    color: rgb(115, 214, 214);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    font-weight: bold;
  }

  &.active {
    background-color: #fff;
    color: #333;
  }

  &.active:hover {
    font-weight: bold;
    background-color: #fff;
    color: #333;
  }

  &.active ${LinkText} {
    color: #333;
    font-weight: bold;
  }
  &.active:hover ${LinkText} {
    color: #333;
    font-weight: bold;
  }
`;

const HelpImage = styled.img`
  object-fit: contain;
  width: 200px;
  height: 120px;

  @media (min-width: 768px) {
    width: 200px;
    height: 140px;
  }
`;

const HelpText = styled.p`
  color: #fff;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  padding-top: 1rem;
`;
export {
  HelpText,
  LinkText,
  PageLink,
  Container,
  Logo,
  LogoContainer,
  LinksContainer,
  HelpImage,
};
