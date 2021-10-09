import TextField from "@material-ui/core/TextField";

const MainSearchInput = () => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      required
      placeholder="Search with Reference number"
      className="mainSearch"
    />
  );
};

export default MainSearchInput;
