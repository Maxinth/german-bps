import styled from "styled-components";
import { ButtonLink } from "../../LoginPageComps/styled";

const RowButton = styled(ButtonLink)`
  outline: none;
  border: none;
  color: #fff;
  border-radius: 3px;
  background-color: ${({ isActive }) => (isActive ? "green" : "red")};
  cursor: unset;
  &:hover {
    box-shadow: unset;
    border: unset;
  }
`;

const Span = styled.span`
  margin-left: 0.5rem;
`;

export { RowButton, Span };
