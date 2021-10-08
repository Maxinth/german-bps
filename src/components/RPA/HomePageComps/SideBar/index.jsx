import { Container } from "./styled";
import SideBarTop from "./SideBarTop";
import SideBarLinks from "./SideBarLinks";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const SideBar = ({ data }) => {
  const isInView = useSelector((state) => state.sideBar.isInView);

  return (
    <Container isInView={isInView}>
      <SideBarTop />
      <SideBarLinks data={data} />
    </Container>
  );
};

SideBar.propTypes = {
  data: PropTypes.array,
};

export default SideBar;
