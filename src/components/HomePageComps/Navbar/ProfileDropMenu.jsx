import { ProfileDropContainer, ProfileDropListItem } from "./styled";
import { profileDropData } from "./data";
import { useVariants } from "../../../motions/useVariants";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ProfileDropMenu = ({ isShown, toggleView }) => {
  const { variantProps, dropVariant } = useVariants();
  return (
    <AnimatePresence>
      {isShown && (
        <ProfileDropContainer
          variants={dropVariant}
          {...variantProps}
          onMouseLeave={toggleView}
        >
          {profileDropData.map((item) => (
            <ProfileDropListItem key={item.title}>
              {item.icon} {item.title}
            </ProfileDropListItem>
          ))}
        </ProfileDropContainer>
      )}
    </AnimatePresence>
  );
};

ProfileDropMenu.propType = {
  isShown: PropTypes.bool,
  toggleView: PropTypes.func,
};
export default ProfileDropMenu;
