import React, { useState } from "react";
import { login } from "../logic/UserFunctions";
import { useNavigate } from "react-router-dom";
import LoginForm from "components/Forms/LoginForm";
import PageContainer from "components/Layout/PageContainer";

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
      <LoginForm />
      <PageContainer />
    </>
  );
};
export default Login;
