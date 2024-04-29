import React from "react";
import { SvgsTypes } from "./types";

const EyeOffIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "22"}
        height={size ?? "23"}
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5941 8.91499C13.0813 8.40162 12.4277 8.05192 11.7161 7.9102C11.0044 7.76849 10.2668 7.84113 9.59641 8.11889C8.92603 8.39665 8.35317 8.86705 7.95032 9.47056C7.54745 10.074 7.33268 10.7835 7.33325 11.5092C7.33248 12.4774 7.71476 13.4067 8.39662 14.0942"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 15.1758C11.9725 15.1758 12.9051 14.7895 13.5927 14.1019C14.2804 13.4143 14.6667 12.4816 14.6667 11.5092"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.1424 6.35758L5.84825 16.6517C4.23565 15.1636 2.87916 13.4199 1.83325 11.4909C6.15075 3.94673 11.4033 2.23258 16.1424 6.35758Z"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.2493 3.25L16.1418 6.3575"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.84833 16.6516L2.75 19.7499"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.9388 8.22754C18.7735 9.25592 19.5188 10.3538 20.1663 11.5092C16.4996 17.9259 12.1638 20.1167 8.03882 18.1275"
          stroke="black"
          stroke-opacity="0.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default EyeOffIcon;
