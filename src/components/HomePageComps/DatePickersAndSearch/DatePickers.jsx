import { Input, DatePickerContainer, Box, Label, Span } from "./styled";
import { useState } from "react";
import PickerButtonOptions from "./PickerButtonOptions";

const DatePickers = ({ data, handlePickerFilter, dataReset }) => {
  const [fromDate, SetFromDate] = useState("");
  const [toDate, SetToDate] = useState("");

  const handleFroChange = (e) => SetFromDate(e.target.value);
  const handleToChange = (e) => SetToDate(e.target.value);

  const dateRangeFilter = data.filter(
    (item) => item.date >= fromDate && item.date <= toDate
  );

  return (
    <DatePickerContainer>
      <Box>
        <Label>
          <Span>From date:</Span>
          <Input type="date" value={fromDate} onChange={handleFroChange} />
        </Label>
        <Label>
          <Span>To date:</Span>
          <Input type="date" value={toDate} onChange={handleToChange} />
        </Label>
      </Box>
      <PickerButtonOptions
        handlePickerFilter={handlePickerFilter}
        dataReset={dataReset}
        dateRangeFilter={dateRangeFilter}
        disableGoBtn={toDate === ""}
      />
    </DatePickerContainer>
  );
};

export default DatePickers;
