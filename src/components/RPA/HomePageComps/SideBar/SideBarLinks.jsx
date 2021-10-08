import { LinksContainer } from "./styled";
import SideBarLink from "./SideBarLink";
import { data } from "./data";

const SideBarLinks = () => {
  return (
    <LinksContainer>
      {data.map((item) => (
        <SideBarLink key={item.pageLink} {...item} />
      ))}
    </LinksContainer>
  );
};

export default SideBarLinks;
