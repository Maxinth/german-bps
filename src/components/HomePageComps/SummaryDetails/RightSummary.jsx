import { RightBox } from "./styled";
import DetailItem from "./DetailItem";
import { data } from "./data";
const RightSummary = () => {
  return (
    <RightBox>
      {data.map((item) => (
        <DetailItem key={item.detailsName} {...item} />
      ))}
    </RightBox>
  );
};

export default RightSummary;
