'use client';
import Register from "./register";
import Login from "./login";

export default function Home(props: any) {
  let pageMode = props.searchParams.mode;
  return (
    <>
      {pageMode === "signup" && <Register />}
      {pageMode === "login" && <Login />}
    </>
  );
}
