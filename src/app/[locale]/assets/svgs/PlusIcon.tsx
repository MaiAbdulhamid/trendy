import React from "react";
import { SvgsTypes } from "./types";

const PlusIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "22"}
        height={size ?? "22"}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5 11C21.5 11.2321 21.4078 11.4546 21.2437 11.6187C21.0796 11.7828 20.8571 11.875 20.625 11.875H11.875V20.625C11.875 20.8571 11.7828 21.0796 11.6187 21.2437C11.4546 21.4078 11.2321 21.5 11 21.5C10.7679 21.5 10.5454 21.4078 10.3813 21.2437C10.2172 21.0796 10.125 20.8571 10.125 20.625V11.875H1.375C1.14294 11.875 0.920376 11.7828 0.756282 11.6187C0.592187 11.4546 0.5 11.2321 0.5 11C0.5 10.7679 0.592187 10.5454 0.756282 10.3813C0.920376 10.2172 1.14294 10.125 1.375 10.125H10.125V1.375C10.125 1.14294 10.2172 0.920376 10.3813 0.756282C10.5454 0.592187 10.7679 0.5 11 0.5C11.2321 0.5 11.4546 0.592187 11.6187 0.756282C11.7828 0.920376 11.875 1.14294 11.875 1.375V10.125H20.625C20.8571 10.125 21.0796 10.2172 21.2437 10.3813C21.4078 10.5454 21.5 10.7679 21.5 11Z"
          fill={color ?? "#343434"}
        />
      </svg>
    </>
  );
};

export default PlusIcon;