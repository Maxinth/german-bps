import { TableRow, TableDataCell } from "./styled";
import PropTypes from "prop-types";

const TableRowItems = ({ row, rowId, rows }) => {
  const handleClick = () => {
    console.log("rowId = ", rowId);
    const rowObj = rows.find((row) => row.original.id === rowId);
    console.log(rowObj?.original);
  };
  return (
    <TableRow onClick={handleClick}>
      {row.cells.map((cell) => (
        <TableDataCell {...cell.getCellProps()}>
          {cell.render("Cell")}
        </TableDataCell>
      ))}
    </TableRow>
  );
};

TableRowItems.propType = {
  row: PropTypes.array,
};
export default TableRowItems;
