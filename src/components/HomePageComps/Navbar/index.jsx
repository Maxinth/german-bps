import { Nav } from "./styled";
import { useState } from "react";
import NavMobileContents from "./NavMobileContents";
import NavLargerScreenContents from "./NavLargerScreenContents";
import { useVariants } from "../../../motions/useVariants";

const Navbar = () => {
  const { variantProps, subtleFlash } = useVariants();

  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const toggleMobileSearchView = () => setShowMobileSearch(!showMobileSearch);
  return (
    <>
      <Nav variants={subtleFlash(2, 0)} {...variantProps}>
        <NavMobileContents
          showMobileSearch={showMobileSearch}
          toggleMobileSearchView={toggleMobileSearchView}
        />
        <NavLargerScreenContents />
      </Nav>
    </>
  );
};

export default Navbar;

/* with or without the useEffect , the functionality works */
