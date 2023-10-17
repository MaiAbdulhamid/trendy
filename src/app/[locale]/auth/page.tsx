'use client';
import Register from "./register";
import Login from "./login";

function Auth(props: any) {
  let pageMode = props.searchParams.mode;
  return (
    <>
      {pageMode === "signup" && <Register />}
      {pageMode === "login" && <Login />}
    </>
  );
}
export default Auth;