import TextField from "@material-ui/core/TextField";
import { Span, Label, Box } from "./styled";
import PropTypes from "prop-types";

const LabeledInputAndDisplay = ({ type, labelName, value = "" }) => {
  return (
    <Label>
      <Span>{labelName}</Span>
      {type === "input" && (
        <TextField
          variant="outlined"
          value={value}
          placeholder="Search with Reference number"
        />
      )}
      {type === "display" && <Box>{value}</Box>}
    </Label>
  );
};

LabeledInputAndDisplay.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default LabeledInputAndDisplay;
