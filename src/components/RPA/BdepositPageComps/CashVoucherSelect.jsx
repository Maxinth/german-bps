import { Label, Span, Text } from "./styled";
import { FormControlLabel, RadioGroup } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import PropTypes from "prop-types";

const CashVoucherSelect = ({ getPaymentType, selectedOption }) => {
  return (
    <Label>
      <Text>
        <Span>*</Span>
        Payment Method
      </Text>
      <RadioGroup
        className="radioGroup"
        value={selectedOption}
        onChange={(e) => getPaymentType(e.target.value)}
      >
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        <FormControlLabel value="voucher" control={<Radio />} label="Voucher" />
      </RadioGroup>
    </Label>
  );
};

CashVoucherSelect.propTypes = {
  getPaymentType: PropTypes.func,
  selectedOption: PropTypes.string,
};

export default CashVoucherSelect;
