import { Container, Box } from "./styled";
import ReportsData from "./ReportsData";
import { useVariants } from "../../motions/useVariants";
// import DatePickerAndSearch from "./DatePickersAndSearch";
import { RecordsTable } from "./TableView";
import SummaryDetails from "./SummaryDetails";
import { useState } from "react";
import { itemData } from "./TableView/data";

const HomePage = () => {
  const { variantProps, pageVariant } = useVariants();
  const [showDetail, setShowDetail] = useState(false);
  const [tableItemClicked, setTableItemClicked] = useState(itemData);

  const getItemClicked = (item) => setTableItemClicked(item);

  const showDetailsView = () => setShowDetail(true);
  return (
    <Container variants={pageVariant} {...variantProps}>
      <ReportsData />

      <Box>
        {!showDetail ? (
          <RecordsTable
            showDetail={showDetailsView}
            getItem={getItemClicked}
            clickShow={true}
          />
        ) : (
          <SummaryDetails {...tableItemClicked} />
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
