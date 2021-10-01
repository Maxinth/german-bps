import {
  TableContainer,
  Table,
  TableBody,
  TableHeader,
  TableHeading,
  TableRow,
  SortBox,
} from "./styled";
import PropTypes from "prop-types";
import TableRowItems from "./TableRowItems";
// import { useVariants } from "../../motions/useVariants";
import { useTable, useSortBy } from "react-table";
import { useMemo } from "react";
import { COLUMNS } from "./columns";
import { data as DATA } from "./data";
import ColumnSortIcons from "./ColumnSortIcons";
export const RecordsTable = ({
  tableHeadings,
  type,
  // data,
  show,

  idToEdit,
}) => {
  // const { variantProps, subtleFlash } = useVariants();

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <TableContainer
    // isInView={show}
    // variants={subtleFlash(1, 0)}
    // {...variantProps}
    >
      <Table {...getTableProps()}>
        <TableHeader>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeading
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <SortBox>
                    {column.render("Header")}
                    <ColumnSortIcons column={column} />
                  </SortBox>
                </TableHeading>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <TableRowItems key={index} {...row.getRowProps()} row={row} />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

RecordsTable.propType = {
  tableHeadings: PropTypes.array,
  data: PropTypes.array,
  type: PropTypes.string,
  show: PropTypes.bool,
  idToEdit: PropTypes.arrayOf(["string", "number"]),
};
