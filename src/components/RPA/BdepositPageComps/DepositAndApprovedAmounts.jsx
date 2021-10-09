import { LineBox } from "./styled";
import LabeledInputAndDisplay from "./LabeledInput";

const DepositAndApprovedAmounts = () => {
  return (
    <LineBox>
      <LabeledInputAndDisplay
        labelName="Amount to Deposit"
        value="$ 23,4000"
        type="display"
      />
      <LabeledInputAndDisplay
        labelName="Approved Amount"
        value="$78, 000"
        type="display"
      />
    </LineBox>
  );
};

export default DepositAndApprovedAmounts;
