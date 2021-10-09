import DepositAndApprovedAmounts from "./DepositAndApprovedAmounts";
import { InnerBox } from "./styled";
import ReferenceNoSearch from "./ReferenceNoSearch";
import BeneficiaryNameAndNo from "./BeneficiaryNameAndNo";
import ApplicationStatus from "./ApplicationStatus";

const TopSection = () => {
  return (
    <InnerBox>
      <ReferenceNoSearch />
      <BeneficiaryNameAndNo />
      <DepositAndApprovedAmounts />
      <ApplicationStatus />
    </InnerBox>
  );
};

export default TopSection;
