import { RightListItem, ItemName, ItemValue } from "./styled";
import PropTypes from "prop-types";

const DetailItem = ({ detailsName, detailsValue }) => {
  return (
    <RightListItem>
      <ItemName>{detailsName}</ItemName>
      <ItemValue>{detailsValue}</ItemValue>
    </RightListItem>
  );
};

DetailItem.propTypes = {
  detailName: PropTypes.string,
  detailValue: PropTypes.string,
};

export default DetailItem;
