import React from "react";
import { SvgsTypes } from "./types";

const StatusCircleIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "19"}
        height={size ?? "19"}
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_265_1470)">
          <path
            d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19Z"
            fill={color ?? "#074432"}
          />
          <path
            d="M5.82666 10.0259L7.92553 12.1248L13.1733 6.87695"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_265_1470">
            <rect width="19" height="19" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default StatusCircleIcon;
