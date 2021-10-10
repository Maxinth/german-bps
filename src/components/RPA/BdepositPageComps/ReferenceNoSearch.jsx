import { LineBox } from "./styled";
import LabeledInputAndDisplay from "./LabeledInput";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const ReferenceNoSearch = ({ refNo, getVal, handleSearch }) => {
  return (
    <LineBox>
      <LabeledInputAndDisplay
        labelName="Reference Number"
        value={refNo}
        handleChange={getVal} // handleChange has been used here so different change handlers can be supplied.
        type="input"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Request
      </Button>
    </LineBox>
  );
};

ReferenceNoSearch.propTypes = {
  refNo: PropTypes.string,
  getVal: PropTypes.func,
};

export default ReferenceNoSearch;
