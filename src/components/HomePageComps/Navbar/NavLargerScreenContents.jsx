import React from "react";
import NavMenuIcon from "./NavMenuIcon";
import NavSearch from "./NavSearch";
// import NotificationsAndProfile from "./NotificationsAndProfile";
import { NavContentContainer } from "./styled";
import PropTypes from "prop-types";

const NavLargerScreenContents = ({ isHomePage }) => {
  return (
    <NavContentContainer lgScreens>
      <NavMenuIcon />
      {/* hide NavSearch on HomePage Alone */}
      {!isHomePage && <NavSearch showOnMobile={false} />}
      {/* <NotificationsAndProfile /> */}
    </NavContentContainer>
  );
};

NavLargerScreenContents.propType = {
  isHomePage: PropTypes.bool,
};

export default NavLargerScreenContents;
