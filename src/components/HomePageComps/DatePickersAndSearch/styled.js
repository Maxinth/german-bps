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

export { Container, Input, DatePickerContainer };
