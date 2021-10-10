import { TableHeader, TableRow, SortBox, TableHeading } from "./styled";
import ColumnSortIcons from "./ColumnSortIcons";
import PropTypes from "prop-types";

const TableGroupHeadings = ({ headerGroups }) => {
  return (
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
  );
};

TableGroupHeadings.propTypes = {
  headerGroups: PropTypes.array,
};

export default TableGroupHeadings;
