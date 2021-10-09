import TextField from "@material-ui/core/TextField";
import { Span, Text, Label, Box } from "./styled";
import PropTypes from "prop-types";

const LabeledInputAndDisplay = ({
  req = false,
  type,
  labelName,
  value = "",
  placeholder,
}) => {
  return (
    <Label>
      <Text>
        {req && <Span>*</Span>}
        {labelName}
      </Text>
      {type === "input" && (
        <TextField variant="outlined" value={value} placeholder={placeholder} />
      )}
      {type === "display" && <Box>{value}</Box>}
    </Label>
  );
};

LabeledInputAndDisplay.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  req: PropTypes.bool,
};

export default LabeledInputAndDisplay;
