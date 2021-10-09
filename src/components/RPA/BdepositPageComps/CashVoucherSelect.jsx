import { Label, Span, Text } from "./styled";
import { FormControlLabel, RadioGroup } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";

const CashVoucherSelect = () => {
  return (
    <Label>
      <Text>
        <Span>*</Span>
        Payment Method
      </Text>
      <RadioGroup className="radioGroup">
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="voucher" control={<Radio />} label="Voucher" />
      </RadioGroup>
    </Label>
  );
};

export default CashVoucherSelect;
