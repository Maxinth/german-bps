import LabeledInput from "./LabeledInput";
import { Form } from "./styled";
import MainSearchInput from "./MainSearchInput";
import Container from "@material-ui/core/Container";

const BeneficiaryDeposit = () => {
  return (
    <Form noValidate autoComplete="off">
      <Container>
        <MainSearchInput />
        <LabeledInput />
      </Container>
    </Form>
  );
};

export default BeneficiaryDeposit;
