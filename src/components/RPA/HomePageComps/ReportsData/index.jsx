import { Container } from "./styled";
import Report from "./Report";
// import { data } from "./data";
import PropTypes from "prop-types";

const ReportsData = ({ data = [] }) => {
  return (
    <Container>
      {data.map((item) => (
        <Report key={item.title} {...item} />
      ))}
    </Container>
  );
};

ReportsData.propTypes = {
  data: PropTypes.array,
};

export default ReportsData;
