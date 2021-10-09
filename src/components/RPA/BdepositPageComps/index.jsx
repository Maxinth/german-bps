import LabeledInputAndDisplay from "./LabeledInput";
import { Form, InnerBox } from "./styled";
import MainSearchInput from "./MainSearchInput";
import Container from "@material-ui/core/Container";
import DepositAndApprovedAmounts from "./DepositAndApprovedAmounts";
// import {data} from './data'
import ReferenceNoSearch from "./ReferenceNoSearch";
import BeneficiaryNameAndNo from "./BeneficiaryNameAndNo";

const BeneficiaryDeposit = () => {
  return (
    <Form noValidate autoComplete="off">
      <Container>
        <MainSearchInput />
        <InnerBox>
          <ReferenceNoSearch />
<BeneficiaryNameAndNo />
          <DepositAndApprovedAmounts />
          <LabeledInputAndDisplay
            labelName="Application Status"
            value="APPROVED"
            type="display"
          />
        </InnerBox>
      </Container>
    </Form>
  );
};

export default BeneficiaryDeposit;
