import { Container, InnerBox } from "./styled";
import LeftSummary from "./LeftSummary";
import RightSummary from "./RightSummary";
import HeadingsMain from "./HeadingsMain";
import Button from "@material-ui/core/Button";

const SummaryDetails = (props) => {
  const { backToTableView } = props;
  const { subsidyAmount, id, ...otherProps } = props.original;
  const { totalValue } = otherProps;
  return (
    <Container>
      <HeadingsMain />
      <InnerBox>
        <LeftSummary totalVal={totalValue} />
        <RightSummary {...otherProps} />
      </InnerBox>
      <Button variant="contained" color="primary" onClick={backToTableView}>
        back to dashboard
      </Button>
    </Container>
  );
};

export default SummaryDetails;
