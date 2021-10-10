import DepositAndApprovedAmounts from "./DepositAndApprovedAmounts";
import { InnerBox } from "./styled";
import ReferenceNoSearch from "./ReferenceNoSearch";
import BeneficiaryNameAndNo from "./BeneficiaryNameAndNo";
import ApplicationStatus from "./ApplicationStatus";
import PropTypes from "prop-types";

const TopSection = ({ refNo, getVal, handleSearch }) => {
  return (
    <InnerBox>
      <ReferenceNoSearch
        refNo={refNo}
        getVal={getVal}
        handleSearch={handleSearch}
      />
      <BeneficiaryNameAndNo />
      <DepositAndApprovedAmounts />
      <ApplicationStatus />
    </InnerBox>
  );
};

TopSection.propTypes = {
  refNo: PropTypes.string,
  getVal: PropTypes.func,
};

export default TopSection;
