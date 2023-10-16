import React from "react";
import authSideImg from "../../assets/images/auth-img.png";
import classes from "./SideImage.module.css";
import Image from "next/image";

const SideImage = () => {
  return (
    <div className={classes["side-img-container"]}>
      <Image src={authSideImg} alt="Auth Side image" />
    </div>
  );
};

export default SideImage;
