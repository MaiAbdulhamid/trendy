'use client';
import Register from "./register";
import Login from "./login";
import Loader from "../components/Loader";

function Auth(props: any) {
  let pageMode = props.searchParams.mode;

  if (!pageMode) return <Loader />;

  return (
    <>
      {pageMode === "signup" && <Register />}
      {pageMode === "login" && <Login />}
    </>
  );
}
export default Auth;