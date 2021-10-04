import styled, { css } from "styled-components";
import { motion } from "framer-motion";
const Nav = styled(motion.nav)`
  width: 100%;
  /* max-width: 1400px; */
  position: fixed;
  top: 0;
  min-height: 66px;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 1px 1px 9px grey;
  z-index: 500;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  transition: padding 0.2s;
  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;

const NavContentContainer = styled.section`
  & > svg {
    color: #333;
    font-weight: bold;
  }

  /* the css are inverses of each other on the respective view ports */
  ${({ mobile }) =>
    mobile &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (min-width: 500px) {
        display: none;
      }
    `}
  /* padding to adjust Nav when search box is in view */
  ${({ searchInView }) =>
    searchInView &&
    css`
      padding-top: 0.3rem;
    `}

  ${({ lgScreens }) =>
    lgScreens &&
    css`
      display: none;
      @media (min-width: 500px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}
`;
const NotificationBox = styled.div`
  position: relative;
  margin-right: 0.7rem;
  cursor: pointer;

  & svg {
    font-size: 1.9rem !important;
  }
`;

const NapContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const CountBox = styled.span`
  border-radius: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: absolute;
  right: -6px;
  top: -9px;
  padding: 0.2rem 0.5rem;
  font-weight: bold;

  & + svg {
    font-size: 2.2rem;
    color: grey;
  }
`;

const ProfileImage = styled.img`
  object-fit: contain;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: 1px ridge ghostwhite;
  box-shadow: 1px 1px 9px grey;
  cursor: pointer;

  ${({ basic }) =>
    basic &&
    css`
      box-shadow: unset;
      border: unset;
    `}
`;

const NavSearchBox = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly;
  justify-content: space-between;
  align-items: center;
  & > svg {
    margin-left: 0.1rem;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
const NavInput = styled.input`
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  flex: 1;
  border: none;
  font-size: 1.2rem;
  &::placeholder {
    font-size: 1.2rem;
    color: grey;
  }
`;
const Form = styled(motion.form)`
  max-width: 100px;
  width: 100%;
  flex: 0.5;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 900px;
    margin: 0 auto;
    flex: 1;
  }
`;
const Button = styled.button`
  padding: 0.5rem 0.5rem;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ghostwhite;
  }
`;

const MasContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileDropContainer = styled(motion.ul)`
  background-color: #fff;
  overflow: hidden; // helps framer roll down the curtains
  border: 1px ridge ghostwhite;
  z-index: 100;
  box-shadow: 1px 2px 4px grey;
  position: absolute;
  top: 58px;
  right: 2px;
  width: 100%;
  min-width: 200px;
  flex: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const ProfileDropListItem = styled.li`
  padding: 0.5rem 0.6rem;
  display: flex;
  align-items: center;
  transition: all 0.2s, font-weight 0.3s;
  cursor: pointer;
  > svg {
    margin-right: 0.5rem;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    background-color: var(--gradientStart);
    color: #fff;
    font-weight: bold;
  }
`;

export {
  ProfileDropContainer,
  ProfileDropListItem,
  MasContainer,
  Form,
  Button,
  NavSearchBox,
  NavInput,
  NapContainer,
  Nav,
  CountBox,
  NotificationBox,
  ProfileImage,
  NavContentContainer,
};
