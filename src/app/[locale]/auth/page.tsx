'use client';
import Register from "./register";
import Login from "./login";
import { useEffect } from "react";
import { setCookie } from "cookies-next";
import Loader from "../components/Loader";

function Auth(props: any) {
  let pageMode = props.searchParams.mode;

  useEffect(() => {
    const fetchIp = async () => {
      await fetch('/api')
    }
    fetchIp().then(res => console.log(res))
  }, []);

  if (!pageMode) return <Loader />;

  return (
    <>
      {pageMode === "signup" && <Register />}
      {pageMode === "login" && <Login />}
    </>
  );
}
export default Auth;