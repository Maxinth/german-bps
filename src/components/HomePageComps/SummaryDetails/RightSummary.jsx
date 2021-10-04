import { RightBox } from "./styled";
import DetailItem from "./DetailItem";
import { data } from "./data";
const RightSummary = () => {
  return (
    <RightBox>
      {/* {data.map((item) => ( */}
      <DetailItem detailsName="scam" detailsValue="moreScam" />
      <DetailItem detailsName="scam" detailsValue="moreScam" />
      <DetailItem detailsName="scam" detailsValue="moreScam" />
      <DetailItem detailsName="scam" detailsValue="moreScam" />
      {/* ))} */}
    </RightBox>
  );
};

export default RightSummary;
