import { Label, Text, Span, Input as TextField } from "./styled";
// import TextField from "@mui/material/TextField";
import CountryDropDown from "./CountryDropDown";
import { data } from "./data";

const MobileLabelInput = ({
  labelName,
  req,
  size,
  value,
  placeholder,
  inputType,
  id,
  handleChange,
}) => {
  return (
    <Label>
      <Text>
        {req && <Span>*</Span>}
        {labelName}
      </Text>
      <CountryDropDown valueOptions={data} id={id} />
      <TextField
        variant="outlined"
        size={size}
        id="mobileNumber"
        value={value}
        placeholder={placeholder}
        type={inputType}
        onChange={handleChange}
      />
    </Label>
  );
};

export default MobileLabelInput;
