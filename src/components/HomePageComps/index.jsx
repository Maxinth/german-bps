import { Container } from "./styled";
import ReportsData from "./ReportsData";
import { useVariants } from "../../motions/useVariants";
// import DatePickerAndSearch from "./DatePickersAndSearch";
import { RecordsTable } from "./TableView";

const HomePage = () => {
  const { variantProps, pageVariant } = useVariants();
  return (
    <Container variants={pageVariant} {...variantProps}>
      <ReportsData />
      {/* <DatePickerAndSearch /> */}
      <RecordsTable />
    </Container>
  );
};

export default HomePage;
