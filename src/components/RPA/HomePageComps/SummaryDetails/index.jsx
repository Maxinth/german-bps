import { Container, InnerBox } from "./styled";
import LeftSummary from "./LeftSummary";
import RightSummary from "./RightSummary";
import HeadingsMain from "./HeadingsMain";

const SummaryDetails = (props) => {
  const { backToTableView } = props;
  const { subsidyAmount, id, ...otherProps } = props.original;
  const { totalValue } = otherProps;
  return (
    <Container>
      <HeadingsMain backToTableView={backToTableView} />
      <InnerBox>
        <LeftSummary totalVal={totalValue} />
        <RightSummary {...otherProps} />
      </InnerBox>
    </Container>
  );
};

export default SummaryDetails;
