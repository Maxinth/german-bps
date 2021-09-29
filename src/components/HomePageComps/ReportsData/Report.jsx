import { ReportBox, Title, Count } from "./styled";
import PropTypes from "prop-types";

const Report = ({ icon, title, recordValue }) => {
  return (
    <ReportBox>
      {icon}
      <Title>{title}</Title>
      <Count>{recordValue}</Count>
    </ReportBox>
  );
};

Report.propType = {
  icon: PropTypes.object,
  title: PropTypes.string,
  recordValue: PropTypes.string,
};
export default Report;
