import React from "react";
import { SvgsTypes } from "./types";

const ArrowRightIcon = ({ size, color }: SvgsTypes) => {
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
          d="M0.744573 25.4016C-0.00187375 24.6253 0.0223306 23.3908 0.798636 22.6444L11.0368 13L0.798636 3.35562C0.0223309 2.60917 -0.00187375 1.37474 0.744573 0.598436C1.49102 -0.177868 2.72546 -0.202072 3.50176 0.544374L15.2018 11.5944C15.5841 11.962 15.8002 12.4696 15.8002 13C15.8002 13.5304 15.5841 14.038 15.2018 14.4056L3.50176 25.4556C2.72546 26.2021 1.49102 26.1779 0.744573 25.4016Z"
          fill={color ?? "white"}
        />
      </svg>
    </>
  );
};

export default ArrowRightIcon;
