import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../../../../features/SideBar";

const NavMenuIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sideBar.isInView);
  return (
    <IconButton onClick={() => dispatch(toggleView())}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
};

export default NavMenuIcon;
