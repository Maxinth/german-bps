import { Button, PickerButtonsBox } from "./styled";
import RefreshIcon from "@material-ui/icons/Refresh";
import PropTypes from "prop-types";

const PickerButtonOptions = ({
  handlePickerFilter,
  dateRangeFilter,
  dataReset,
  suppliedOnlyField,
  goBtnColor,
  resetInputs,
  invalidDates,
}) => {
  const handleRefreshClick = () => {
    resetInputs();
    handlePickerFilter(dataReset);
  };
  return (
    <PickerButtonsBox>
      <Button
        onClick={() => handlePickerFilter(dateRangeFilter)}
        title={
          suppliedOnlyField
            ? "Kindly supply values for both date fields to continue"
            : invalidDates
            ? "From-date can't be greater than to-Date"
            : "Filter by date"
        }
        disabled={invalidDates || suppliedOnlyField}
        className={goBtnColor}
      >
        Go
      </Button>
      <Button onClick={handleRefreshClick} title="Revert to Initial Data">
        <RefreshIcon />
      </Button>
    </PickerButtonsBox>
  );
};

PickerButtonOptions.propTypes = {
  handlePickerFilter: PropTypes.func,
  resetInputs: PropTypes.func,
  dateRangeFilter: PropTypes.array,
  dataReset: PropTypes.array,
  suppliedOnlyField: PropTypes.bool,
  invalidDates: PropTypes.bool,
  goBtnColor: PropTypes.string,
};

export default PickerButtonOptions;
