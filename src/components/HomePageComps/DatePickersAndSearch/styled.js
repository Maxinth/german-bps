import styled from "styled-components";
import { InputBox } from "../TableView/styled";
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  /* margin: 0 auto; */
  padding: 1rem;

  & ${InputBox} {
    align-self: center;
    margin: 0.8rem 0;
    transition: all 0.2s;
    width: 100%;
  }

  @media (min-width: 500px) {
    flex-direction: row;
    & ${InputBox} {
      align-self: flex-start;
      margin: unset;
    }
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 2rem 1rem;
    /* margin: 0 auto; */
    align-items: center;
    & ${InputBox} {
      align-self: flex-end;
      width: 60%;
    }
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 5px;
  border: 1px solid #333;
  transition: all 0.2s;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: 1px 2px 5px #333;
  transition: margin 0.2s;
  margin-bottom: 0.8rem;
  @media (min-width: 768px) {
    margin-bottom: unset;
    &:first-child {
      margin-right: 0.8rem;
    }
  }
`;
const DatePickerContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  border: 1px solid #333;
  outline: none;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #f2f2f2;
  color: #333;
  box-shadow: 1px 2px 5px #333;
  transition: all 0.2s;
  border-radius: 5px;
  margin-right: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  & > svg {
    font-size: 1.1rem !important;
  }

  &:nth-child(2) {
    padding: 0.4rem;
  }
  &:hover {
    background-color: #333;
    color: #f2f2f2;
  }

  &:disabled {
    cursor: not-allowed;
  }
  &.oneSupplied {
    background-color: orange;
    color: #333;
  }
  &.noneSupplied {
    background-color: transparent;
    color: #333;
  }
  &.bothSupplied {
    background-color: green;
    color: #fff;
  }
`;

const PickerButtonsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    width: 100%;
  }
  @media (min-width: 500px) {
    width: unset;
    & > * {
      width: unset;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    &:first-child {
      margin-right: 0.7rem;
    }
  }
`;
const Span = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export {
  Span,
  Label,
  Box,
  PickerButtonsBox,
  Button,
  Container,
  Input,
  DatePickerContainer,
};
