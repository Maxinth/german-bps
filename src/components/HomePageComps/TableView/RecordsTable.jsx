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
import TableFilterInput from "./TableFilterInput";
import { COLUMNS } from "./columns";
import { data as DATA } from "./data";
import ColumnSortIcons from "./ColumnSortIcons";
import useTableSortAndFilter from "./useSortAndFilter";

export const RecordsTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    globalFilter,
    setGlobalFilter,
  } = useTableSortAndFilter(COLUMNS, DATA);
  return (
    <TableContainer
    // isInView={show}
    // variants={subtleFlash(1, 0)}
    // {...variantProps}
    >
      <TableFilterInput filter={globalFilter} setFilter={setGlobalFilter} />
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
