import React from "react";
import { SvgsTypes } from "./types";

const ArrowLeftIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "16"}
        height="26"
        viewBox="0 0 16 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.2554 0.59844C16.0019 1.37475 15.9777 2.60918 15.2014 3.35563L4.96321 13L15.2014 22.6444C15.9777 23.3908 16.0019 24.6253 15.2554 25.4016C14.509 26.1779 13.2745 26.2021 12.4982 25.4556L0.798241 14.4056C0.415887 14.038 0.199802 13.5304 0.199802 13C0.199802 12.4696 0.415887 11.962 0.798241 11.5944L12.4982 0.544378C13.2745 -0.202069 14.509 -0.177865 15.2554 0.59844Z"
          fill={color ?? "white"}
        />
      </svg>
    </>
  );
};

export default ArrowLeftIcon;
