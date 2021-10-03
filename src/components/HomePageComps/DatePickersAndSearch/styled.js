import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  /* margin: 0 auto; */
  padding: 1rem;

  @media (min-width: 500px) {
    flex-direction: row;
  }
  @media (min-width: 768px) {
    padding: 2rem;
    margin: 0 auto;
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

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  border: 1px solid #333;
  outline: none;
  padding: 1rem 0.5rem;
  cursor: pointer;
  background-color: #f2f2f2;
  color: #333;
  box-shadow: 1px 2px 4px #f2f2f2;
  transition: all 0.2s;
  border-radius: 5px;
  margin-right: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  &:hover {
    background-color: #333;
    color: #f2f2f2;
  }
`;

export { Button, Container, Input, DatePickerContainer };
