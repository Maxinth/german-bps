import { Container } from "./styled";
import Report from "./Report";
// import { data } from "./data";
import PropTypes from "prop-types";
// import Loader from '../../../Loaders'

const ReportsData = ({ data = [] }) => {
  return (
    <>
      {data.length && (
        <Container>
          {data.map((item) => (
            <Report key={item.title} {...item} />
          ))}
        </Container>
      )}
    </>
  );
};

ReportsData.propTypes = {
  data: PropTypes.array,
};

export default ReportsData;
