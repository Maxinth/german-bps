import DatePickers from "./DatePickers";
import { Container } from "./styled";
import TableFilterInput from "../TableView/TableFilterInput";

const DatePickerAndSearch = () => {
  return (
    <Container>
      <DatePickers />
      <TableFilterInput />
    </Container>
  );
};

export default DatePickerAndSearch;
