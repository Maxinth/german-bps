import { InputBox } from "./styled";
import PropTypes from "prop-types";

const TableFilterInput = ({ filter, setFilter }) => {
  return (
    <InputBox
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search by text in any column."
    />
  );
};

TableFilterInput.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
export default TableFilterInput;
