import DatePicker from "react-datepicker";
import { useState } from "react";

const DatePickers = () => {
  // define check-in and check-out state
  const [initialDate, setInitialDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);

  // define handler change function on check-in date
  const handleInitialDateChange = (date) => {
    setInitialDate(date);
    setFinalDate(null);
  };

  // define handler change function on check-out date
  const handleFinalDateChange = (date) => {
    setFinalDate(date);
  };
  return (
    <>
      <DatePicker
        selected={initialDate}
        onChange={handleInitialDateChange}
        dateFormat="yyyy/MM/dd"
        name="initial Date"
        // minDate={new Date()}
      />

      <DatePicker
        selected={finalDate}
        onChange={handleFinalDateChange}
        dateFormat="dd/MM/yyyy"
        name="final Date"
        // minDate={initialDate}
      />
    </>
  );
};

export default DatePickers;
