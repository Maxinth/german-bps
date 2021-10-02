import { InputBox } from "./styled";
import PropTypes from "prop-types";

const TableFilterInput = ({ filter, setFilter }) => {
  return (
    <InputBox
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

TableFilterInput.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
export default TableFilterInput;
