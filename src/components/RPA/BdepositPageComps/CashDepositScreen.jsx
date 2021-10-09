import LabeledInputAndDisplay from "./LabeledInput";
import CashVoucherSelect from "./CashVoucherSelect";

const CashDepositScreen = () => {
  return (
    <>
      <LabeledInputAndDisplay
        type="display"
        labelName="Deposit Reference"
        value="AUTO-GENERATE REF"
      />
      <LabeledInputAndDisplay
        type="input"
        labelName="Deposit amount"
        value=""
        placeholder="Deposit Amount"
        req={true}
      />
      <CashVoucherSelect />
    </>
  );
};

export default CashDepositScreen;
