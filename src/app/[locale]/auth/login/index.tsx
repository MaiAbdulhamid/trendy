import React from "react";
import LoginForm from "./LoginForm";
import Heading from "../components/Heading";

const Login = () => {
  return (
    <>
      <Heading
        title="helloAgain"
        appName
        subTitle="welcomeLogin"
        extraPadding
      />
      <LoginForm />
    </>
  );
};

export default Login;
