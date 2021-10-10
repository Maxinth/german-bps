import { useState, useEffect } from "react";

const useGetDashBoardData = () => {
  const [txnData, setTxnData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const getRpaHomeData = () => {
    //GET
    setIsLoading(true);
    fetch("http://localhost:4000/rpa-dboard")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const { txnReports, tableRecords } = data;
        setIsLoading(false);
        setTableData(tableRecords);
        setTxnData(txnReports);
        console.log("doFetch");
        // const refNo = "FKE20200112";
        // const tableItem = tableRecords.find((item) => item.refNo === refNo);
        // console.log(tableItem);
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
    isLoading,
  };
};

export default useGetDashBoardData;
