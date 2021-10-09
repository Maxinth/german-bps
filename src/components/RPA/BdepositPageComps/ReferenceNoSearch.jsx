import { LineBox } from "./styled";
import LabeledInputAndDisplay from "./LabeledInput";
import Button from "@material-ui/core/Button";
const ReferenceNoSearch = () => {
  return (
    <LineBox>
      <LabeledInputAndDisplay
        labelName="Reference Number"
        value=""
        type="input"
      />
      <Button variant="contained" color="primary">
        Request
      </Button>
    </LineBox>
  );
};

export default ReferenceNoSearch;
