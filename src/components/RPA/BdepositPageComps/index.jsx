import LabeledInputAndDisplay from "./LabeledInput";
import { Form } from "./styled";
import MainSearchInput from "./MainSearchInput";
import Container from "@material-ui/core/Container";
// import {data} from './data'

const BeneficiaryDeposit = () => {
  return (
    <Form noValidate autoComplete="off">
      <Container>
        <MainSearchInput />
        <LabeledInputAndDisplay labelName="Reference Number" value="" />
        <LabeledInputAndDisplay
          labelName="Beneficiary Name"
          value="Beneficiary Name"
          isGreyedOut={true}
          type="display"
        />
        <LabeledInputAndDisplay
          labelName="Mobile Number"
          value="Mobile Number"
          isGreyedOut={true}
          type="display"
        />
      </Container>
    </Form>
  );
};

export default BeneficiaryDeposit;
