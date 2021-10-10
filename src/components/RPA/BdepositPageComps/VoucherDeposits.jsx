import { VoucherBox, InnerVoucherBox } from "./styled";
import CashDepositScreen from "./CashDepositScreen";
import Button from "@material-ui/core/Button";
import VoucherDepositScreen from "./VoucherDepositScreen";
import { useState } from "react";

const VoucherDeposits = ({ depositReceived }) => {
  const [paymentType, setPaymentType] = useState("cash");
  const getPaymentType = (id) => setPaymentType(id);
  return (
    <VoucherBox>
      <InnerVoucherBox>
        {paymentType === "cash" && (
          <CashDepositScreen
            getPaymentType={getPaymentType}
            selectedOption={paymentType}
          />
        )}
        {paymentType === "voucher" && (
          <VoucherDepositScreen deposit={depositReceived} />
        )}
        <Button variant="contained" color="primary">
          Process Deposit
        </Button>
      </InnerVoucherBox>
    </VoucherBox>
  );
};

export default VoucherDeposits;
