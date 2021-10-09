import LabeledInputAndDisplay from "./LabeledInput";

const BeneficiaryNameAndNo = () => {
  return (
    <>
      <LabeledInputAndDisplay
        labelName="Beneficiary Name"
        value="Beneficiary Name"
        type="display"
      />
      <LabeledInputAndDisplay
        labelName="Mobile Number"
        value="Mobile Number"
        type="display"
      />
    </>
  );
};

export default BeneficiaryNameAndNo;
