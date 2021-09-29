import { Nav } from "./styled";
import { useLocation } from "react-router-dom";
import { checkPage } from "./data";
import { useState } from "react";
import NavMobileContents from "./NavMobileContents";
import NavLargerScreenContents from "./NavLargerScreenContents";
import { useVariants } from "../../../motions/useVariants";

const Navbar = () => {
  const { variantProps, subtleFlash } = useVariants();
  const location = useLocation();
  const isLogPage = checkPage(location.pathname);
  const isHomePage = location.pathname === "/home";

  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const toggleMobileSearchView = () => setShowMobileSearch(!showMobileSearch);
  return (
    <>
      {!isLogPage && (
        <Nav variants={subtleFlash(2, 0)} {...variantProps}>
          <NavMobileContents
            isHomePage={isHomePage}
            showMobileSearch={showMobileSearch}
            toggleMobileSearchView={toggleMobileSearchView}
          />
          <NavLargerScreenContents isHomePage={isHomePage} />
        </Nav>
      )}
    </>
  );
};

export default Navbar;

/* with or without the useEffect , the functionality works */
