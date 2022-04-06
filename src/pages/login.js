import React, { useState } from "react";
import { login } from "../logic/UserFunctions";
import { useNavigate } from "react-router-dom";
import { Body } from "../components/Custom/CustomContainers";
import LoginForm from "components/Forms/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const testLogin = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    login(user).then((res) => {
      if (res) {
        navigate("/user");
      }
    });
  };

  return (
    <>
      <Body>
        <LoginForm />
      </Body>
    </>
  );
};
export default Login;
