import { Container, Heading, InnerBox } from "./styled";
import LeftSummary from "./LeftSummary";
const SummaryDetails = () => {
  return (
    <Container>
      <Heading>Basic Subsidy Scheme</Heading>
      <Heading as="h2">SeedCo Limited</Heading>
      <Heading as="h3">Payment Details</Heading>
      <InnerBox>
        <LeftSummary />
      </InnerBox>
    </Container>
  );
};

export default SummaryDetails;
