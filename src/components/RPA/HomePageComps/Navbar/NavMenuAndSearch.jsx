import NavMenuIcon from "./NavMenuIcon";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { MasContainer } from "./styled";
import PropTypes from "prop-types";

const NavMenuAndSearch = ({ toggleSearch }) => {
  return (
    <MasContainer>
      <NavMenuIcon />
      <SearchSharpIcon onClick={toggleSearch} />
    </MasContainer>
  );
};

NavMenuAndSearch.propType = {
  toggleSearch: PropTypes.func,
};
export default NavMenuAndSearch;
