import { TableDataCell, ActionBox } from "../styled";
import PropTypes from "prop-types";
import LaunchIcon from "@material-ui/icons/Launch";
import DeleteIcon from "@material-ui/icons/Delete";
// import { Link } from "react-router-dom";
const IsBranchRowItems = ({
  name,
  createdBy,
  dateCreated,
  index,
  editBranch,
  removeBranch,
  showEditBranchView,
  id,
}) => {
  const handleClick = (id) => {
    editBranch(id);
    showEditBranchView();
  };
  return (
    <>
      <TableDataCell>{index + 1}</TableDataCell>
      <TableDataCell>{name.toUpperCase()}</TableDataCell>
      <TableDataCell>{createdBy}</TableDataCell>
      <TableDataCell>{dateCreated}</TableDataCell>
      <TableDataCell>
        <ActionBox>
          <LaunchIcon onClick={() => handleClick(id)} />
          <DeleteIcon onClick={() => removeBranch(id)} />
        </ActionBox>
      </TableDataCell>
    </>
  );
};

IsBranchRowItems.propType = {
  index: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  createdBy: PropTypes.string,
  dateCreated: PropTypes.string,
  editBranch: PropTypes.func,
  removeBranch: PropTypes.func,
  showEditBranchView: PropTypes.func,
};

export default IsBranchRowItems;
