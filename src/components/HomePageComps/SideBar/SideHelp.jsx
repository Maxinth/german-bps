import { HelpImage, LogoContainer as HelpImageBox, HelpText } from "./styled";
import helpImg from "../../../assets/help.png";

const SideHelp = () => {
  return (
    <HelpImageBox col>
      <HelpText>
        Need Help ? <br /> Visit our help center
      </HelpText>
      <HelpImage src={helpImg} alt="help" />
    </HelpImageBox>
  );
};

export default SideHelp;
