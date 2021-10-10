import { useState, useEffect } from "react";

const useGetDashBoardData = () => {
  const [txnData, setTxnData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const getRpaHomeData = () => {
    //GET

    fetch("http://localhost:4000/rpa-dboard")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { reportsData, tableRecords } = data;
        setTableData(tableRecords);
        setTxnData(reportsData);
      });
  };

  useEffect(() => {
    // run this anytime the branchData changes
    getRpaHomeData();
  }, []);

  return {
    txnData,
    tableData,
    setTableData,
    setTxnData,
  };
};

export default useGetDashBoardData;
