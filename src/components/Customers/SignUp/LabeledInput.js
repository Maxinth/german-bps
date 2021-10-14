// import {TextField} from "@mui/material";
import { Span, Text, Label, Box , Input} from "./styled";
import PropTypes from "prop-types";

const LabeledInputAndDisplay = ({
  req = false,
  type,
  labelName,
  value = "",
  placeholder,
  handleChange,
  // size="small",
  inputType="text"
}) => {
  return (
    <Label>
      <Text>
        {req && <Span>*</Span>}
        {labelName}
      </Text>
      {type === "input" && (
        <Input
          // variant="outlined"
          // size={size}
          value={value}
          placeholder={placeholder}
          type={inputType}
          onChange={(e) => handleChange(e.target.value)}
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
  req: PropTypes.bool,
};

export default LabeledInputAndDisplay;
