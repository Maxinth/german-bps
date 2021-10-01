import { InputBox } from "./styled";
const TableFilterInput = ({ filter, setFilter }) => {
  return (
    <InputBox
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default TableFilterInput;
