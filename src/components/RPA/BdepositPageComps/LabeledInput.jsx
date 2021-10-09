import TextField from "@material-ui/core/TextField";
import { Span, Label, Box } from "./styled";

const LabeledInputAndDisplay = ({
  type,
  labelName,
  value = "",
  isGreyedOut = false,
}) => {
  return (
    <Label>
      <Span>{labelName}</Span>
      {type === "input" && (
        <TextField
          // label="Search with Reference number"
          variant="outlined"
          // fullWidth
          // required
          value={value}
          placeholder="Search with Reference number"
          // value="summy text"
          disabled={isGreyedOut}
        />
      )}
      {type === "display" && <Box>{value}</Box>}
    </Label>
  );
};

export default LabeledInputAndDisplay;
