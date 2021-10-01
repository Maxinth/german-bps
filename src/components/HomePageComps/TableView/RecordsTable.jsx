import {
  TableContainer,
  Table,
  TableBody,
  TableHeader,
  TableHeading,
  TableRow,
} from "./styled";
import PropTypes from "prop-types";
import TableRowItems from "./TableRowItems";
import { useVariants } from "../../motions/useVariants";

export const RecordsTable = ({
  tableHeadings,
  type,
  data,
  show,
  editBranch,
  removeBranch,
  showEditBranchView,
  showEditUserView,
  editUser,
  idToEdit,
}) => {
  const { variantProps, subtleFlash } = useVariants();
  return (
    <TableContainer
      isInView={show}
      variants={subtleFlash(1, 0)}
      {...variantProps}
    >
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeadings.map((item, index) => (
              <TableHeading key={index}>{item}</TableHeading>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRowItems
              key={index}
              {...item}
              index={index}
              type={type}
              editBranch={editBranch}
              editUser={editUser}
              removeBranch={removeBranch}
              showEditBranchView={showEditBranchView}
              showEditUserView={showEditUserView}
              idToEdit={idToEdit}
            />
          ))}
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
  editBranch: PropTypes.func,
  idToEdit: PropTypes.arrayOf(["string", "number"]),
  removeBranch: PropTypes.func,
  showEditBranchView: PropTypes.func,
  showEditUserView: PropTypes.func,
  editUser: PropTypes.func,
};
