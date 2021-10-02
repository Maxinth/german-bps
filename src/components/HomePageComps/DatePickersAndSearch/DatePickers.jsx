import { Input, DatePickerContainer } from "./styled";
import { useState } from "react";

const DatePickers = ({ data, handlePickerFilter, dataReset }) => {
  const [fromDate, SetFromDate] = useState("");
  const [toDate, SetToDate] = useState("");

  const handleFroChange = (e) => SetFromDate(e.target.value);
  const handleToChange = (e) => SetToDate(e.target.value);

  // console.log("fromDate = ", fromDate);
  // console.log("toDate = ", toDate);

  const dateRangeFilter = data.filter(
    (item) => item.date >= fromDate && item.date <= toDate
  );

  return (
    <DatePickerContainer>
      <Input type="date" value={fromDate} onChange={handleFroChange} />
      <Input type="date" value={toDate} onChange={handleToChange} />
      <button onClick={() => handlePickerFilter(dateRangeFilter)}>
        filter by date
      </button>
      <button onClick={() => handlePickerFilter(dataReset)}>
        see all data
      </button>
    </DatePickerContainer>
  );
};

export default DatePickers;
