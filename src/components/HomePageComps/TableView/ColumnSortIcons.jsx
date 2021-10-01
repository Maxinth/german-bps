import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { ColumnSortBox } from "./styled";

const ColumnSortIcons = ({ column }) => {
  const sortDirectionClass = column.isSorted
    ? !column.isSortedDesc
      ? "up"
      : "down"
    : "";

  const sortDirectionProps = { className: sortDirectionClass };
  return (
    <ColumnSortBox>
      <ArrowDropUpIcon {...sortDirectionProps} />
      <ArrowDropDownIcon {...sortDirectionProps} />
    </ColumnSortBox>
  );
};

export default ColumnSortIcons;
