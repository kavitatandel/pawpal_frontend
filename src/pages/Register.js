import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../logic/UserFunctions";
import RegisterForm from "../components/Forms/RegisterForm";
import { Link } from "react-router-dom";
import Header from "components/Layout/Header";

import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CenteredFooter from "components/Layout/CenteredFooter";
import PageContainer from "components/Layout/PageContainer";

const Register = () => {
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
      navigate("/user");
    });
  };

  return (
    <>
      <RegisterForm />
      <PageContainer />
    </>
  );
};

export default Register;
