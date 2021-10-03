export const goBtnBgColor = (fromDate, toDate) => {
  let btnClass = "";
  if (!fromDate && !toDate) {
    btnClass = "noneSupplied";
  } else if (!fromDate || !toDate) {
    btnClass = "oneSupplied";
  } else {
    btnClass = "bothSupplied";
  }
  return btnClass;
};
