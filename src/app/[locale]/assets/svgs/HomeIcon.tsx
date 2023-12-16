import React from "react";
import { SvgsTypes } from "./types";
import HomeImg from "../images/home-icon.png";
import Image from "next/image";

const HomeIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <Image src={HomeImg} alt="home icon" />
    </>
  );
};

export default HomeIcon;
