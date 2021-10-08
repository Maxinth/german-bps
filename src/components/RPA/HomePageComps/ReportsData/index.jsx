import { Container } from "./styled";
import Report from "./Report";
import { data } from "./data";
const ReportsData = () => {
  return (
    <Container>
      {data.map((item) => (
        <Report key={item.title} {...item} />
      ))}
    </Container>
  );
};

export default ReportsData;
