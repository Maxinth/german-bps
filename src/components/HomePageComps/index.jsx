import { Container } from "./styled";
import ReportsData from "./ReportsData";
import { useVariants } from "../../motions/useVariants";
import NavBar from "./Navbar";

const HomePage = () => {
  const { variantProps, pageVariant } = useVariants();
  return (
    <>
      <NavBar />
      <Container variants={pageVariant} {...variantProps}>
        <ReportsData />
      </Container>
    </>
  );
};

export default HomePage;
