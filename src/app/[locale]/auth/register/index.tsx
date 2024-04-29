import React from "react";
import RegisterForm from "./RegisterForm";
import Heading from "../components/Heading";

const Register = () => {
  return (
    <>
      <Heading title="createAnewAccount" appName extraPadding />
      <RegisterForm />
    </>
  );
};

export default Register;
