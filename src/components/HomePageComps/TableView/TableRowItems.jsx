import { TableRow, TableDataCell } from "./styled";
import PropTypes from "prop-types";

const TableRowItems = ({ row }) => {
  return (
    <TableRow>
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
