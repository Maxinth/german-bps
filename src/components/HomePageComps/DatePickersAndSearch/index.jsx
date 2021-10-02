import DatePickers from "./DatePickers";
import { Container } from "./styled";
import TableFilterInput from "../TableView/TableFilterInput";

const DatePickerAndSearch = (props) => {
  return (
    <Container>
      <DatePickers {...props} />
      <TableFilterInput {...props} />
    </Container>
  );
};

export default DatePickerAndSearch;
