import React, { useState } from "react";
import { DatePicker,  } from "@material-ui/pickers";



const DatePickers = () => {
  // define check-in and check-out state
  const [initialDate, setInitialDate] = useState(new Date());
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
      />

      <DatePicker
        selected={finalDate}
        onChange={handleFinalDateChange}
        dateFormat="dd/MM/yyyy"
      />
    </>
  );
};

export default DatePickers;
