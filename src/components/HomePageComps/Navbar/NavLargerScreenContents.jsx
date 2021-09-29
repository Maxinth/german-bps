import React from "react";
import NavMenuIcon from "./NavMenuIcon";

// import NotificationsAndProfile from "./NotificationsAndProfile";
import { NavContentContainer } from "./styled";
import PropTypes from "prop-types";

const NavLargerScreenContents = ({ isHomePage }) => {
  return (
    <NavContentContainer lgScreens>
      <NavMenuIcon />
    </NavContentContainer>
  );
};

NavLargerScreenContents.propType = {
  isHomePage: PropTypes.bool,
};

export default NavLargerScreenContents;
