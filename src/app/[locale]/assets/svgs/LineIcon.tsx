import React from "react";
import { SvgsTypes } from "./types";

const LineIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width="1"
        height={size ?? "18"}
        viewBox="0 0 1 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.25"
          x2="0.25"
          y2="18"
          stroke={color ?? "black"}
          stroke-opacity="0.6"
          stroke-width="0.5"
        />
      </svg>
    </>
  );
};

export default LineIcon;
