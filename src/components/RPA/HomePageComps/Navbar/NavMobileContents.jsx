import React from "react";
import NavSearch from "./NavSearch";
import NavMenuAndSearch from "./NavMenuAndSearch";
import NavMenuIcon from "./NavMenuIcon";

import { NavContentContainer } from "./styled";
import PropTypes from "prop-types";

const NavMobileContents = ({
  showMobileSearch,
  toggleMobileSearchView,
  isHomePage,
}) => {
  return (
    <NavContentContainer searchInView={showMobileSearch} mobile>
      {/* show for only home page */}
      {isHomePage && <NavMenuIcon />}
      {/* show for only home page */}

      {/* show when SearchBar is not in veiw and the page isn't the home page*/}
      {!showMobileSearch && !isHomePage && (
        <NavMenuAndSearch toggleSearch={toggleMobileSearchView} />
      )}
      {/* show when SearchBar is not in veiw and the page isn't the home page*/}

      {/* hide NavSearch on HomePage Alone */}
      {showMobileSearch && !isHomePage && (
        <NavSearch
          showOnMobile={showMobileSearch}
          revertToInitialView={toggleMobileSearchView}
        />
      )}
      {/* hide NavSearch on HomePage Alone */}
    </NavContentContainer>
  );
};

NavMobileContents.propType = {
  showMobileSearch: PropTypes.bool,
  isHomePage: PropTypes.bool,
  toggleMobileSearchView: PropTypes.func,
};

export default NavMobileContents;
