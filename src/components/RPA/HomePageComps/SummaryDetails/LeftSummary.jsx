import { LeftBox, DummyQrImage, Title, Amount } from "./styled";
import dummyImg from "../../../../assets/mockQrCode.PNG";

const LeftSummary = ({ totalVal }) => {
  return (
    <LeftBox>
      <DummyQrImage src={dummyImg} />
      <Title>Goods value released</Title>
      <Amount>${totalVal}</Amount>
    </LeftBox>
  );
};

export default LeftSummary;
