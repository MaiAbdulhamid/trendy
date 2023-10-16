import React from "react";
import { SvgsTypes } from "./types";

const EmailIcon = ({size, color}: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "24"}
        height={size ?? "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="5"
          stroke={color ?? "#DEB156"}
          stroke-width="1.5"
        />
        <path
          opacity="0.3"
          d="M6 9L10.8 12.6C11.5111 13.1333 12.4889 13.1333 13.2 12.6L18 9"
          stroke={color ?? "#DEB156"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default EmailIcon;
