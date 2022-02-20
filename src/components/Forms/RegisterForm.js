import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../logic/UserFunctions";
import Header from "components/Layout/Header";

// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RegisterForm() {
  //const [rememberMe, setRememberMe] = useState(false);
  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [userType, setUserType] = useState("owner");

  let navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      user_type: userType,
      street: street,
      zip_code: zipcode,
      city: city,
      country: country,
    };

    register(newUser).then((res) => {
      navigate("/login");
    });
  };

  //for radio group
  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <>
      <MKBox
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={1}
        sx={{ width: "75%" }}
      >
        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          height="85%"
        >
          {/* <Grid item xs={11} sm={9} md={5} lg={10} xl={3}> */}
          <Grid
            item
            sx={{ minWidth: 400, maxWidth: 600 }}
            xs={12}
            sm={12}
            md={10}
            lg={8}
            xl={8}
            xxl={6}
          >
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={4}
                mt={-3}
                p={5}
                mb={-2}
                textAlign="center"
              >
                <MKTypography
                  variant="h3"
                  fontWeight="large"
                  color="white"
                  // mt={1}
                >
                  REGISTER
                </MKTypography>
                {/* <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  // sx={{ mt: 1, mb: 2 }}
                  sx={{ mt: 0, mb: 0 }}
                ></Grid> */}
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox
                  component="form"
                  method="post"
                  autocomplete="off"
                  role="form"
                  onSubmit={createUser}
                  p={6}
                >
                  <MKBox mb={1} display="flex" justifyContent="space-between">
                    <MKInput
                      style={{ width: "48%" }}
                      label="First Name"
                      type="text"
                      name="first_name"
                      placeholder="Enter your first name"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <MKInput
                      style={{ width: "48%" }}
                      label="Last Name"
                      type="text"
                      name="last_name"
                      placeholder="Enter your last name"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    {/* <MKInput
                      label="Last Name"
                      type="text"
                      name="last_name"
                      placeholder="Enter your last name"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    /> */}
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      fullWidth
                      label="E-Mail"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      fullWidth
                      label="Password"
                      name="password"
                      placeholder="Enter your password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      fullWidth
                      label="Street Name"
                      type="text"
                      name="street"
                      placeholder="Enter your street"
                      required
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2} display="flex" justifyContent="space-between">
                    <MKInput
                      style={{ width: "48%" }}
                      label="Zip Code"
                      type="text"
                      name="zip_code"
                      placeholder="Enter your zip code"
                      required
                      value={zipcode}
                      onChange={(e) => setZipcode(e.target.value)}
                    />
                    <MKInput
                      style={{ width: "48%" }}
                      label="City"
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      fullWidth
                      label="Country"
                      type="text"
                      name="country"
                      placeholder="Enter your country"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </MKBox>
                  {/* <MKBox mb={2} >
                    <Radio
                      label="Owner"
                      size="small"
                      type="radio"
                      name="account_type"
                      value="owner"
                      checked={userType === "owner"}
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                    />

                    <Radio
                      label="Dog Lover"
                      size="small"
                      type="radio"
                      name="account_type"
                      value="doglover"
                      checked={userType === "doglover"}
                      onChange={(e) => {
                        setUserType(e.target.value);
                      }}
                    />

                  </MKBox> */}
                  <MKBox
                    mt={4}
                    justifyContent="flex-start"
                    display="flex"
                    mb={6}
                    ml={0.5}
                    textAlign="left"
                    width="100%"
                  >
                    <FormControl>
                      <FormLabel
                        style={{ fontSize: "0.70em", color: "Gray" }}
                        size="small"
                      >
                        User Type
                      </FormLabel>
                      <RadioGroup
                        name="controlled-radio-buttons-group"
                        value={userType}
                        onChange={handleChange}
                        size="small"
                        row
                      >
                        <FormControlLabel
                          value="owner"
                          control={
                            <Radio
                              size="small"
                              style={{ fontSize: "0.70em" }}
                            />
                          }
                          label="Owner"
                        />
                        <FormControlLabel
                          value="doglover"
                          control={
                            <Radio
                              size="small"
                              style={{ fontSize: "0.70em" }}
                            />
                          }
                          label="Dog Lover"
                        />
                      </RadioGroup>
                    </FormControl>
                  </MKBox>
                  {/* <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch
                      checked={rememberMe}
                      onChange={handleSetRememberMe}
                    />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox> */}
                  <MKBox
                    mt={2}
                    justifyContent="center"
                    display="flex"
                    textAlign="center"
                    width="100%"
                  >
                    {/* <MKButton variant="gradient" color="info" fullWidth>
                      Register
                    </MKButton> */}
                    <MKButton
                      size="large"
                      onClick={() => navigate("/")}
                      variant="gradient"
                      color="info"
                      style={{
                        marginRight: "1.5rem",
                        width: "8rem",
                        minWidth: "120px",
                      }}
                    >
                      Cancel
                    </MKButton>
                    <MKButton
                      size="large"
                      type="submit"
                      variant="gradient"
                      color="info"
                      style={{
                        marginLeft: "1.5rem",
                        width: "8rem",
                        minWidth: "120px",
                      }}
                    >
                      Sign Up
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    {/* <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKButton
                        onClick={() => navigate("/")}
                        variant="gradient"
                        color="info"
                      >
                        Cancel
                      </MKButton> */}
                    {/* <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography> */}
                    {/* </MKTypography> */}
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox
        width="100%"
        position="absolute"
        zIndex={2}
        bottom="1.625rem"
      ></MKBox>
    </>

    // OLD CODE BELOW
    // <MKBox component="section" py={12}>
    //   <Container>
    //     <Grid
    //       container
    //       item
    //       justifyContent="center"
    //       xs={10}
    //       lg={7}
    //       mx="auto"
    //       textAlign="center"
    //     >
    //       <MKTypography variant="h3" mb={1}>
    //         Register
    //       </MKTypography>
    //     </Grid>
    //     <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
    //       <MKBox
    //         width="100%"
    //         component="form"
    //         method="post"
    //         onSubmit={createUser}
    //         autocomplete="off"
    //       >
    //         <MKBox p={3}>
    //           {/* <form onSubmit={createUser}> */}
    //           <Grid container spacing={3}>
    //             <Grid item xs={12} md={6}>
    //               <MKInput
    //                 label="First Name"
    //                 type="text"
    //                 name="first_name"
    //                 placeholder="Enter your first name"
    //                 required
    //                 value={firstName}
    //                 onChange={(e) => setFirstName(e.target.value)}
    //               />
    //             </Grid>
    //             <Grid item xs={12} md={6}>
    //               <MKInput
    //                 label="Last Name"
    //                 type="text"
    //                 name="last_name"
    //                 placeholder="Enter your last name"
    //                 required
    //                 value={lastName}
    //                 onChange={(e) => setLastName(e.target.value)}
    //               />
    //             </Grid>
    //           </Grid>
    //           <Container>
    //             <MKInput
    //               label="E-Mail"
    //               name="email"
    //               placeholder="Enter your email"
    //               type="email"
    //               required
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </Container>
    //           <Container>
    //             <MKInput
    //               label="Password"
    //               name="password"
    //               placeholder="Enter your password"
    //               type="password"
    //               required
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </Container>
    //           <Container>
    //             <MKInput
    //               label="Street Name"
    //               type="text"
    //               name="street"
    //               placeholder="Enter your street"
    //               required
    //               value={street}
    //               onChange={(e) => setStreet(e.target.value)}
    //             />
    //           </Container>
    //           <Container>
    //             <MKInput
    //               label="Zip Code"
    //               type="text"
    //               name="zip_code"
    //               placeholder="Enter your zip code"
    //               required
    //               value={zipcode}
    //               onChange={(e) => setZipcode(e.target.value)}
    //             />
    //           </Container>
    //           <Container>
    //             <MKInput
    //               label="City"
    //               type="text"
    //               name="city"
    //               placeholder="Enter your city"
    //               required
    //               value={city}
    //               onChange={(e) => setCity(e.target.value)}
    //             />
    //           </Container>
    //           <Container>
    //             <MKInput
    //               label="Country"
    //               type="text"
    //               name="country"
    //               placeholder="Enter your country"
    //               required
    //               value={country}
    //               onChange={(e) => setCountry(e.target.value)}
    //             />
    //           </Container>
    //           <Container>
    //             <Radio
    //               type="radio"
    //               name="account_type"
    //               value="owner"
    //               checked={userType === "owner"}
    //               onChange={(e) => {
    //                 setUserType(e.target.value);
    //               }}
    //             />
    //             Owner
    //             <Radio
    //               type="radio"
    //               name="account_type"
    //               value="doglover"
    //               checked={userType === "doglover"}
    //               onChange={(e) => {
    //                 setUserType(e.target.value);
    //               }}
    //             />
    //             Dog Lover
    //           </Container>
    //           <Container>
    //             <MKButton type="submit">Sign Up</MKButton>
    //             <MKButton onClick={() => navigate("/")}>Cancel</MKButton>
    //           </Container>
    //           {/* </form> */}
    //         </MKBox>
    //       </MKBox>
    //     </Grid>
    //   </Container>
    // </MKBox>
  );
}

export default RegisterForm;
