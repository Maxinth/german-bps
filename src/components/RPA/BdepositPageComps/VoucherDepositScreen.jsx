import LabeledInputAndDisplay from "./LabeledInput";

const VoucherDepositScreen = () => {
  return (
    <>
      <LabeledInputAndDisplay
        type="input"
        labelName="Voucher Code"
        value=""
        placeholder="Enter Voucher Code"
        req={true}
      />
      <LabeledInputAndDisplay
        type="display"
        labelName="Voucher Owner"
        value="Mobile and wallet number on voucher"
      />
      <LabeledInputAndDisplay
        type="display"
        labelName="Voucher Value"
        value="$ 23,400"
      />
      <LabeledInputAndDisplay
        type="input"
        labelName="Voucher PIN"
        value=""
        placeholder="Enter PIN"
        req={true}
      />
    </>
  );
};

export default VoucherDepositScreen;
