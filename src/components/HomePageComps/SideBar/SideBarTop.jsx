import { Logo, LogoContainer } from "./styled";
import sideBarLogo from "../../../assets/logoTeal.png";

const SideBarTop = () => {
  return (
    <LogoContainer>
      <Logo src={sideBarLogo} alt="logo" />
    </LogoContainer>
  );
};

export default SideBarTop;
