import { Box, Label, Span, Input } from "./styled";
import PropTypes from "prop-types";

const DatePickersUnits = ({
  toDate,
  fromDate,
  handleFroChange,
  handleToChange,
}) => {
  return (
    <Box>
      <Label>
        <Span>From date :</Span>
        <Input type="date" value={fromDate} onChange={handleFroChange} />
      </Label>
      <Label>
        <Span>To date :</Span>
        <Input type="date" value={toDate} onChange={handleToChange} />
      </Label>
    </Box>
  );
};

DatePickersUnits.propTypes = {
  toDate: PropTypes.string,
  fromDate: PropTypes.string,
  handleFroChange: PropTypes.func,
  handleToChange: PropTypes.func,
};

export default DatePickersUnits;
