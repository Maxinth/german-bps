import { NavSearchBox, NavInput, Button, Form } from "./styled";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { btnClickHandler } from "./data";
import PropTypes from "prop-types";
import { useVariants } from "../../../motions/useVariants";

const NavSearch = ({ showOnMobile, revertToInitialView }) => {
  const { variantProps, subtleFlash } = useVariants();
  return (
    <Form variants={subtleFlash(2, 0)} {...variantProps}>
      <NavSearchBox>
        {showOnMobile && <ArrowBackIcon onClick={revertToInitialView} />}
        <NavInput type="input" placeholder="Search..." />
        <Button type="submit" onClick={btnClickHandler}>
          <SearchSharpIcon />
        </Button>
      </NavSearchBox>
    </Form>
  );
};

NavSearch.propType = {
  showOnMobile: PropTypes.bool,
  revertToInitialView: PropTypes.func,
};
export default NavSearch;
