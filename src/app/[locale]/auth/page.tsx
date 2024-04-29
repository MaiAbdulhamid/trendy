'use client';
import Register from "./register";
import Login from "./login";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

function Auth(props: any) {
  const [isPageLoading, setIsPageLoading] = useState(true);

  let pageMode = props.searchParams.mode;

  useEffect(() => {
    setIsPageLoading(false)
  }, [isPageLoading]);

  if(isPageLoading) return <Loader />;

  return (
    <>
      {pageMode === "signup" && <Register />}
      {pageMode === "login" && <Login />}
    </>
  );
}
export default Auth;