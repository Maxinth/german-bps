import { PageLink, LinkText } from "./styled";
import { useDispatch } from "react-redux";
import { toggleView } from "../../../../features/SideBar";
import { makeActiveLink } from "./data";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SideBarLink = ({ icon, pageLink, linkText }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const pagePath = location.pathname;

  return (
    <PageLink
      to={`/${pageLink}`}
      onClick={() => dispatch(toggleView())}
      activeClassName={makeActiveLink(pagePath, `/${pageLink}`)}
    >
      {icon}
      <LinkText>{linkText}</LinkText>
    </PageLink>
  );
};

SideBarLink.propType = {
  icon: PropTypes.object,
  pageLink: PropTypes.string,
  linkText: PropTypes.string,
};
export default SideBarLink;
