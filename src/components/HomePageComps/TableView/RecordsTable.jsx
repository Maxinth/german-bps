import {
  TableContainer,
  Table,
  TableBody,
  TableHeader,
  TableHeading,
  TableRow,
  SortBox,
} from "./styled";
import TableRowItems from "./TableRowItems";
// import TableFilterInput from "./TableFilterInput";
import { COLUMNS } from "./columns";
import { data as DATA } from "./data";
import ColumnSortIcons from "./ColumnSortIcons";
import useTableSortAndFilter from "./useSortAndFilter";
import DatePickerAndSearch from "../DatePickersAndSearch";
import { useState } from "react";

export const RecordsTable = () => {
  const [dataToSort, setDataToSort] = useState(DATA);
  // see comments
  const handlePickerFilter = (newData) => setDataToSort(newData);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    globalFilter,
    setGlobalFilter,
  } = useTableSortAndFilter(COLUMNS, dataToSort);
  return (
    <TableContainer
    // isInView={show}
    // variants={subtleFlash(1, 0)}
    // {...variantProps}
    >
      <DatePickerAndSearch
        filter={globalFilter}
        setFilter={setGlobalFilter}
        dataReset={DATA}
        data={dataToSort}
        handlePickerFilter={handlePickerFilter}
      />
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
            // console.log(rows);
            // // console.log(row.original.id);
            return (
              <TableRowItems
                key={index}
                {...row.getRowProps()}
                row={row}
                rowId={row.original.id}
                rows={rows}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

/*
 I have decided not supply  DATA  directly into the useTableAndSort hook as I want to filter 
 using normal js filtering and react-table and so the data can be changed by each whilst still referencing just one data.

*/
