import { Container, Box } from "./styled";
import ReportsData from "./ReportsData";
import { useVariants } from "../../motions/useVariants";
// import DatePickerAndSearch from "./DatePickersAndSearch";
import { RecordsTable } from "./TableView";
import SummaryDetails from "./SummaryDetails";
import { useState } from "react";

const HomePage = () => {
  const { variantProps, pageVariant } = useVariants();
  const [showDetail, setShowDetail] = useState(false);

  const showDetailsView = () => setShowDetail(true);
  return (
    <Container variants={pageVariant} {...variantProps}>
      <ReportsData />

      <Box>
        {!showDetail ? (
          <RecordsTable showDetail={showDetailsView} />
        ) : (
          <SummaryDetails />
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
