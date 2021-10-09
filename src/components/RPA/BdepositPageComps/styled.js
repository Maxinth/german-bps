import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;

  & div.mainSearch {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
  margin-bottom: 0.5rem;
`;

const Span = styled.span`
  margin-right: 0.8rem;

  & + * {
    flex: 1;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border: 1px solid grey;
  /* text-align: center; */
  border-radius: 3px;
`;

export { Form, Label, Span, Box };
