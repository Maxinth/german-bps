import { Input, DatePickerContainer, Button } from "./styled";
import { useState } from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import FilterAltIcon from "@material-ui/icons/FilterAlt";

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
      <Input type="date" value={fromDate} onChange={handleFroChange} />
      <Input type="date" value={toDate} onChange={handleToChange} />
      <Button
        onClick={() => handlePickerFilter(dateRangeFilter)}
        title="Filter by date"
      >
        <FilterAltIcon />
      </Button>
      <Button onClick={() => handlePickerFilter(dataReset)}>
        <RefreshIcon />
      </Button>
    </DatePickerContainer>
  );
};

export default DatePickers;
