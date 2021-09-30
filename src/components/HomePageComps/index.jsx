import { Container } from "./styled";
import ReportsData from "./ReportsData";
import { useVariants } from "../../motions/useVariants";

const HomePage = () => {
  const { variantProps, pageVariant } = useVariants();
  return (
    <Container variants={pageVariant} {...variantProps}>
      <ReportsData />
    </Container>
  );
};

export default HomePage;
