import { TableRow } from "./styled";
import PropTypes from "prop-types";
import IsBranchRowItems from "./TableRows/IsBranchRowItems";
import IsSystemLogRowItems from "./TableRows/IsSystemLogRowItems";
import IsUserRowItems from "./TableRows/IsUserRowItems";

const TableRowItems = ({
  type,
  index,
  name,
  firstName,
  lastName,
  branch,
  createdBy,
  dateCreated,
  selectBranch,
  loggedInAt,
  loggedOutAt,
  editBranch,
  removeBranch,
  showEditBranchView,
  no,
  email,
  isActive,
  selectRole,
  image,
  phoneNo,
  showEditUserView,
  id,
  editUser,
}) => {
  return (
    <TableRow>
      {type === "branch" && (
        <IsBranchRowItems
          name={name}
          createdBy={createdBy}
          index={index}
          id={id}
          dateCreated={dateCreated}
          editBranch={editBranch}
          removeBranch={removeBranch}
          showEditBranchView={showEditBranchView}
        />
      )}
      {type === "systemLog" && (
        <IsSystemLogRowItems
          name={name}
          branch={branch}
          loggedInAt={loggedInAt}
          loggedOutAt={loggedOutAt}
        />
      )}
      {type === "users" && (
        <IsUserRowItems
          firstName={firstName}
          lastName={lastName}
          selectBranch={selectBranch}
          no={no}
          id={id}
          index={index}
          email={email}
          image={image}
          phoneNo={phoneNo}
          isActive={isActive}
          selectRole={selectRole}
          showEditUserView={showEditUserView}
          editUser={editUser}
        />
      )}
    </TableRow>
  );
};

TableRowItems.propType = {
  // branch page props
  type: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.arrayOf(["string", "number"]),
  name: PropTypes.string,
  createdBy: PropTypes.string,
  dateCreated: PropTypes.string,
  editBranch: PropTypes.func,
  removeBranch: PropTypes.func,
  showEditBranchView: PropTypes.func,

  // logPageProps

  branch: PropTypes.string,
  loggedInAt: PropTypes.string,
  loggedOutAt: PropTypes.string,

  // userPage props
  no: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  phoneNo: PropTypes.string,
  isActive: PropTypes.bool,
  selectRole: PropTypes.string,
  selectBranch: PropTypes.string,
  showEditUserView: PropTypes.func,
  editUser: PropTypes.func,
};
export default TableRowItems;
