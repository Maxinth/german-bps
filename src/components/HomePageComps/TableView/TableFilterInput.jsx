import React from "react";

const TableFilterInput = ({ filter, setFilter }) => {
  return (
    <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
  );
};

export default TableFilterInput;
