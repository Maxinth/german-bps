import { useState } from "react";
// import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import LabeledInput from "./LabelInput";
import { LabelBox } from "./styled";
import MobileLabelInput from "./MobileLabelInput";
import { initState } from "./data";
const theme = createTheme();

export default function SignUp() {
  const [signupInfo, setSignUpInfo] = useState(initState);
  const handleChange = (e) => {
    setSignUpInfo({ ...signupInfo, [e.target.id]: e.target.value });
  };

  /*
firstName: "",
  surName: "",
  country: "",
  mobileNumber: "",
  email: "",
  password: "",
  retypePassword: "",

  */

  const {
    firstName,
    surName,
    country,
    mobileNumber,
    email,
    password,
    retypePassword,
  } = signupInfo;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "2px 0px 10px rgb(0,0,0,0.4)",
            padding: "35px",
            maxWidth: "700px",
            margin: "5rem auto",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <LabelBox>
              <LabeledInput
                handleChange={handleChange}
                type="input"
                req={true}
                value={firstName}
                id="firstName"
                placeholder="FirstName"
                labelName="Names"
                inputType="text"
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={handleChange}
                type="input"
                req={true}
                value={surName}
                id="surName"
                placeholder="surname"
                labelName="Names"
                inputType="text"
              />
            </LabelBox>
            <LabelBox>
              <MobileLabelInput
                labelName="Mobile number"
                placeholder="select country"
                id="country"
                value={mobileNumber}
                handleChange={handleChange}
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={handleChange}
                type="input"
                req={true}
                value={mobileNumber}
                id="mobileNumber"
                labelName=""
                inputType="text"
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={handleChange}
                type="input"
                req={true}
                value={email}
                id="email"
                placeholder="Email"
                labelName="Email Addresss"
                inputType="email"
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={handleChange}
                type="input"
                req={true}
                value={password}
                id="password"
                placeholder=""
                labelName="Password"
              />
            </LabelBox>
            <LabelBox>
              <LabeledInput
                handleChange={handleChange}
                type="input"
                req={true}
                value={retypePassword}
                id="retypePassword"
                placeholder=""
                labelName="Retype password"
              />
            </LabelBox>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <NavLink to={`/forgot`} style={{ marginLeft: "35%" }}>
              Sign up
            </NavLink>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
