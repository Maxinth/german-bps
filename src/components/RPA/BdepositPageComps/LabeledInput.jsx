import TextField from "@material-ui/core/TextField";

const LabeledInput = () => {
  return (
    <>
            <TextField
          // label="Search with Reference number"
          variant="outlined"
          fullWidth
          required
          placeholder="Search with Reference number"
          // value="summy text"
          disabled={false}
        />
    </>
  );
};

export default LabeledInput;
