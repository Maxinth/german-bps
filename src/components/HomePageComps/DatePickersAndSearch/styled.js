import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  /* margin: 0 auto; */
  padding: 2rem;

  & .react-datepicker-wrapper {
    margin: 12px 0;
    width: 100%;
    & input {
      padding: 4px 12px;
    }
  }
`;

const Input = styled.input``;
const DatePickerContainer = styled.section``;

export { Container, Input, DatePickerContainer };
