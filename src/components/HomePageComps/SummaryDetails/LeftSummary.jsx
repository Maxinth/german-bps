import { LeftBox, DummyQrImage, Title, Amount } from "./styled";
import dummyImg from "../../assets/mockQrCode.png";
const LeftSummary = () => {
  return (
    <LeftBox>
      <DummyQrImage src={dummyImg} />
      <Title>Goods value released</Title>
      <Amount>$ 78,000</Amount>
    </LeftBox>
  );
};

export default LeftSummary;
