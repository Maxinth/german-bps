import {  LogoContainer as HelpImageBox, HelpText } from "./styled";


const SideHelp = () => {
  return (
    <HelpImageBox col>
      <HelpText>
        Need Help ? <br /> Visit our help center
      </HelpText>
      {/* <HelpImage src={helpImg} alt="help" /> */}
    </HelpImageBox>
  );
};

export default SideHelp;
