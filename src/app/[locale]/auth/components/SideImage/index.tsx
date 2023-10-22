import React from "react";
import authSideImg from "../../../assets/images/auth-img.png";
import Image from "next/image";
import { ImageContainer } from "./style";

const SideImage = () => {
  return (
    <ImageContainer>
      <Image src={authSideImg} alt="Auth Side image" />
    </ImageContainer>
  );
};

export default SideImage;
