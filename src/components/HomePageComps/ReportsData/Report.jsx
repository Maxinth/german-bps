import { ReportBox, Title, Count as Amount } from "./styled";
import PropTypes from "prop-types";

const Report = ({  title, amount }) => {
  return (
    <ReportBox>    
      <Title>{title}</Title>
      <Amount>$ {amount}</Amount>
    </ReportBox>
  );
};

Report.propType = {
  
  title: PropTypes.string,
  amount: PropTypes.string,
};
export default Report;
