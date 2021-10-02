import { Input, DatePickerContainer } from "./styled";
import { useState } from "react";

const DatePickers = () => {
  const [fromDate, SetFromDate] = useState("");
  const [toDate, SetToDate] = useState("");

  const handleFroChange = (e) => SetFromDate(e.target.value);
  const handleToChange = (e) => SetToDate(e.target.value);

  console.log("fromDate = ", fromDate);
  // console.log("toDate = ", toDate);
  return (
    <DatePickerContainer>
      <Input type="date" value={fromDate} onChange={handleFroChange} />
      <Input type="date" value={toDate} onChange={handleToChange} />
    </DatePickerContainer>
  );
};

export default DatePickers;
