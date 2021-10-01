import { TableDataCell } from "../styled";
import PropTypes from "prop-types";
import { ProfileImage } from "../../HomePageComps/Navbar/styled";
import LaunchIcon from "@material-ui/icons/Launch";
import UserRowButton from "./UserRowButton";
import { Span } from "./styled";
import userImg from "../../../assets/avatarImg.jpg";

const IsUserRowItems = ({
  index,
  id,
  firstName,
  lastName,
  email,
  selectBranch,
  phoneNo,
  selectRole,
  showEditUserView,
  editUser,
}) => {
  const handleClick = (id) => {
    editUser(id);
    showEditUserView();
  };
  return (
    <>
      <TableDataCell>{index + 1}</TableDataCell>
      <TableDataCell>
        <ProfileImage src={userImg} alt="user profile" basic />
      </TableDataCell>
      <TableDataCell>
        {firstName} <Span>{lastName}</Span>
      </TableDataCell>
      <TableDataCell>{email}</TableDataCell>
      <TableDataCell>{selectBranch.toUpperCase()}</TableDataCell>
      <TableDataCell>{phoneNo}</TableDataCell>
      <TableDataCell>
        <UserRowButton isActive={selectRole === "Admin"} />
      </TableDataCell>
      <TableDataCell>{selectRole}</TableDataCell>
      <TableDataCell>
        <LaunchIcon onClick={() => handleClick(id)} />
      </TableDataCell>
    </>
  );
};

IsUserRowItems.propType = {
  index: PropTypes.number,
  id: PropTypes.string,
  // image: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  selectBranch: PropTypes.string,
  phoneNo: PropTypes.string,
  isActive: PropTypes.bool,
  selectRole: PropTypes.string,
  showEditUserView: PropTypes.func,
  editUserView: PropTypes.func,
};
export default IsUserRowItems;
