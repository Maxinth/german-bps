import { Input, DatePickerContainer, Box } from "./styled";
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
        <Input type="date" value={fromDate} onChange={handleFroChange} />
        <Input type="date" value={toDate} onChange={handleToChange} />
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
