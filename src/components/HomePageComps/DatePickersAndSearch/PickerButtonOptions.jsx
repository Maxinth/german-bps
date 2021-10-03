import { Button, PickerButtonsBox } from "./styled";
import RefreshIcon from "@material-ui/icons/Refresh";
import PropTypes from "prop-types";

const PickerButtonOptions = ({
  handlePickerFilter,
  dateRangeFilter,
  dataReset,
  disableGoBtn,
}) => {
  return (
    <PickerButtonsBox>
      <Button
        onClick={() => handlePickerFilter(dateRangeFilter)}
        title={disableGoBtn ? "supply to date to continue" : "Filter by date"}
        disabled={disableGoBtn}
      >
        Go
      </Button>
      <Button
        onClick={() => handlePickerFilter(dataReset)}
        title="Revert to Initial Data"
      >
        <RefreshIcon />
      </Button>
    </PickerButtonsBox>
  );
};

PickerButtonOptions.propTypes = {
  handlePickerFilter: PropTypes.func,
  dateRangeFilter: PropTypes.array,
  dataReset: PropTypes.array,
  disableGoBtn: PropTypes.bool,
};

export default PickerButtonOptions;
