import { TableContainer, Table, TableBody } from "./styled";
import TableRowItems from "./TableRowItems";
import { COLUMNS } from "./columns";
// import { data as DATA } from "./data";
import useTableSortAndFilter from "./useSortAndFilter";
import DatePickerAndSearch from "../DatePickersAndSearch";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableGroupHeadings from "./TableHeadings";

export const RecordsTable = ({ showDetail, getItem, clickShow, DATA }) => {
  // initially empty
  const [mainData, setMainData] = useState([]);
  // see comments
  // set after Table has rendered
  useEffect(() => setMainData(DATA), [DATA]);
  const handlePickerFilter = (newData) => setMainData(newData);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    globalFilter,
    setGlobalFilter,
  } = useTableSortAndFilter(COLUMNS, mainData);
  return (
    <>
      {mainData.length && (
        <TableContainer>
          <DatePickerAndSearch
            filter={globalFilter}
            setFilter={setGlobalFilter}
            dataReset={DATA}
            data={mainData}
            handlePickerFilter={handlePickerFilter}
          />
          <Table {...getTableProps()}>
            <TableGroupHeadings headerGroups={headerGroups} />
            <TableBody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);

                return (
                  <TableRowItems
                    key={index}
                    {...row.getRowProps()}
                    row={row}
                    rowId={row.original.id}
                    rows={rows}
                    showDetail={showDetail}
                    getItem={getItem}
                    clickShow={clickShow}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

RecordsTable.propTypes = {
  showDetail: PropTypes.func,
  clickShow: PropTypes.bool,
  getItem: PropTypes.func,
  DATA: PropTypes.array,
};
/*
 I have decided not supply  DATA  directly into the useTableAndSort hook as I want to filter 
 using normal js filtering and react-table and so the data can be changed by each whilst still referencing just one data.

 const [mainData, setMainData] = useState([]);
  rather than supplying DATA directly in the useState, it is set only when the table has initially rendered.
  useEffect(() => setMainData(DATA), [DATA]);

*/
