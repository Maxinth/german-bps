import { Container, Box } from "./styled";
import ReportsData from "./ReportsData";
import { useVariants } from "../../../motions/useVariants";
// import DatePickerAndSearch from "./DatePickersAndSearch";
import { RecordsTable } from "./TableView";
import SummaryDetails from "./SummaryDetails";
import { useState } from "react";
import { itemData } from "./TableView/data";
import useGetDashBoardData from "./useGetDashBoardData";

const HomePage = () => {
  const { variantProps, pageVariant } = useVariants();
  const [showDetail, setShowDetail] = useState(false);
  const [tableItemClicked, setTableItemClicked] = useState(itemData);

  const getItemClicked = (item) => setTableItemClicked(item);

  const showDetailsView = () => setShowDetail(true);
  const revertToInitialView = () => setShowDetail(false);

  const { txnData, tableData } = useGetDashBoardData();
  return (
    <Container variants={pageVariant} {...variantProps}>
      {!showDetail && <ReportsData data={txnData} />}

      <Box>
        {!showDetail && (
          <RecordsTable
            showDetail={showDetailsView}
            getItem={getItemClicked}
            clickShow={true}
            DATA={tableData}
          />
        )}
        {showDetail && (
          <SummaryDetails
            {...tableItemClicked}
            backToTableView={revertToInitialView}
          />
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
