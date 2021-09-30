import { Container } from "./styled";
import ReportsData from "./ReportsData";
import { useVariants } from "../../motions/useVariants";
import DatePickerAndSearch from "./DatePickersAndSearch";

const HomePage = () => {
  const { variantProps, pageVariant } = useVariants();
  return (
    <Container variants={pageVariant} {...variantProps}>
      <ReportsData />
      <DatePickerAndSearch />
    </Container>
  );
};

export default HomePage;
