import { RowButton } from "./styled";
import PropTypes from "prop-types";

const UserRowButton = ({ isActive }) => {
  return (
    <RowButton as={"button"} isActive={isActive}>
      {isActive ? "Active" : "Inactive"}
    </RowButton>
  );
};

UserRowButton.propType = {
  isActive: PropTypes.bool,
};
export default UserRowButton;
