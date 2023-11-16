import React from "react";
import { SvgsTypes } from "./types";

const MinusIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "22"}
        height="2"
        viewBox="0 0 22 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5 1C21.5 1.23206 21.4078 1.45462 21.2437 1.61872C21.0796 1.78281 20.8571 1.875 20.625 1.875H1.375C1.14294 1.875 0.920376 1.78281 0.756282 1.61872C0.592187 1.45462 0.5 1.23206 0.5 1C0.5 0.767936 0.592187 0.545376 0.756282 0.381282C0.920376 0.217187 1.14294 0.125 1.375 0.125H20.625C20.8571 0.125 21.0796 0.217187 21.2437 0.381282C21.4078 0.545376 21.5 0.767936 21.5 1Z"
          fill={color ?? "#343434"}
        />
      </svg>
    </>
  );
};

export default MinusIcon;
