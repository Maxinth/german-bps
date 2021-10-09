import { Form } from "./styled";
import MainSearchInput from "./MainSearchInput";
import Container from "@material-ui/core/Container";
import TopSection from "./TopSection";
import VoucherDeposits from "./VoucherDeposits";
// import {data} from './data'

const BeneficiaryDeposit = () => {
  return (
    <Form noValidate autoComplete="off">
      <Container>
        <MainSearchInput />
        <TopSection />
        <VoucherDeposits />
      </Container>
    </Form>
  );
};

export default BeneficiaryDeposit;
