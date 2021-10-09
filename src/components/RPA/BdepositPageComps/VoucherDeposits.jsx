import { VoucherBox, InnerVoucherBox } from "./styled";
import CashDepositScreen from "./CashDepositScreen";
import Button from "@material-ui/core/Button";
import VoucherDepositScreen from "./VoucherDepositScreen";

const VoucherDeposits = () => {
  return (
    <VoucherBox>
      <InnerVoucherBox>
        <CashDepositScreen />
        <VoucherDepositScreen />
        <Button variant="contained" color="primary">
          Process Deposit
        </Button>
      </InnerVoucherBox>
    </VoucherBox>
  );
};

export default VoucherDeposits;
