import { DatePickerContainer } from "./styled";
import { useState } from "react";
import PickerButtonOptions from "./PickerButtonOptions";
import DatePickersUnits from "./DatePickersUnits";
import { goBtnBgColor } from "./data";

const DatePickers = ({ data, handlePickerFilter, dataReset }) => {
  const [fromDate, SetFromDate] = useState("");
  const [toDate, SetToDate] = useState("");

  const handleFroChange = (e) => SetFromDate(e.target.value);
  const handleToChange = (e) => SetToDate(e.target.value);

  const resetInputs = () => {
    SetFromDate("");
    SetToDate("");
  };
  const dateRangeFilter = data.filter(
    (item) => item.date >= fromDate && item.date <= toDate
  );

  const invalidDatesSupplied = fromDate > toDate;
  return (
    <DatePickerContainer>
      <DatePickersUnits
        toDate={toDate}
        fromDate={fromDate}
        handleToChange={handleToChange}
        handleFroChange={handleFroChange}
      />
      <PickerButtonOptions
        handlePickerFilter={handlePickerFilter}
        dataReset={dataReset}
        dateRangeFilter={dateRangeFilter}
        suppliedOnlyField={toDate === "" || fromDate === ""}
        goBtnColor={goBtnBgColor(fromDate, toDate)}
        resetInputs={resetInputs}
        invalidDates={invalidDatesSupplied}
      />
    </DatePickerContainer>
  );
};

export default DatePickers;
