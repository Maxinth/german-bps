import { Container, Heading, InnerBox } from "./styled";
import LeftSummary from "./LeftSummary";
import RightSummary from "./RightSummary";
const SummaryDetails = (props) => {
  console.log("Summary details Props = ");
  console.log(props);
  return (
    <Container>
      <Heading>Basic Subsidy Scheme</Heading>
      <Heading as="h2">SeedCo Limited</Heading>
      <Heading as="h3">Payment Details</Heading>
      <InnerBox>
        <LeftSummary />
        <RightSummary />
      </InnerBox>
    </Container>
  );
};

export default SummaryDetails;
