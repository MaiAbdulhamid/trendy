import React from "react";
import { SvgsTypes } from "./types";

const StatusLineIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width="1"
        height="39"
        viewBox="0 0 1 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.25"
          x2="0.25"
          y2="39"
          stroke="#DEB156"
          stroke-width="0.5"
          stroke-dasharray="1 1"
        />
      </svg>
    </>
  );
};

export default StatusLineIcon;
