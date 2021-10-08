import { LinksContainer } from "./styled";
import SideBarLink from "./SideBarLink";
import PropTypes from "prop-types";

const SideBarLinks = ({ data }) => {
  return (
    <LinksContainer>
      {data.map((item) => (
        <SideBarLink key={item.pageLink} {...item} />
      ))}
    </LinksContainer>
  );
};

SideBarLinks.propTypes = {
  data: PropTypes.array,
};

export default SideBarLinks;
