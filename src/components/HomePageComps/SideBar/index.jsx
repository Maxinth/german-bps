import { Container } from "./styled";
import SideBarTop from "./SideBarTop";
import SideBarLinks from "./SideBarLinks";
import { useSelector } from "react-redux";


const SideBar = () => {
  const isInView = useSelector((state) => state.sideBar.isInView);

  return (
    <Container isInView={isInView}>
      <SideBarTop />
      <SideBarLinks />    
    </Container>
  );
};

export default SideBar;
