import styled from "styled-components";
import {
  Label,
  Text,
  Span,
} from "../../../Pages/RPAScreen/DepositPageComps/styled";

const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`;
const Input = styled.input`
  border: 1px solid #333;
  /* padding: 1rem; */
  width: 100%;
  height: 100%;
  /* background-color: red; */
  outline: none;
  font-size: 1rem;
  width: 100%;
  border: none;
`;
const SelectBox = styled.select`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  /* border: 1px solid #dee2e6; */
  /* padding: 0.5rem 1.5rem 1rem 1rem; */
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
`;
const Option = styled.option`
  padding: 1rem;
  cursor: pointer;
`;

export { LabelBox, Label, Text, Span, SelectBox, Option, Input };
