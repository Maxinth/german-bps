import { Container, Heading, InnerBox } from "./styled";
import LeftSummary from "./LeftSummary";
import RightSummary from "./RightSummary";

const SummaryDetails = (props) => {
  const { backToTableView } = props;
  const { subsidyAmount, id, ...otherProps } = props.original;
  const { totalValue } = otherProps;
  return (
    <Container>
      <Heading onClick={backToTableView}>Basic Subsidy Scheme</Heading>
      <Heading as="h2">SeedCo Limited</Heading>
      <Heading as="h3">Payment Details</Heading>
      <InnerBox>
        <LeftSummary totalVal={totalValue} />
        <RightSummary {...otherProps} />
      </InnerBox>
    </Container>
  );
};

export default SummaryDetails;
