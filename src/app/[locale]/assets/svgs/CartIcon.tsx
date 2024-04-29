import React from "react";
import { SvgsTypes } from "./types";

const CartIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "34"}
        height={size ?? "35"}
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_233_612)">
          <path
            d="M5.44021 10.02L2.72021 33.82H31.2802L28.5602 10.02H5.44021Z"
            stroke={color ?? "#343434"}
            stroke-width="2.4375"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M23.1204 13.42C23.1204 12.5761 23.1204 8.82387 23.1204 7.97999C23.1204 4.59971 20.3807 1.85999 17.0004 1.85999C13.6201 1.85999 10.8804 4.59971 10.8804 7.97999C10.8804 8.82387 10.8804 12.5761 10.8804 13.42"
            stroke={color ?? "#343434"}
            stroke-width="2.4375"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M23.1198 14.78C23.8709 14.78 24.4798 14.1711 24.4798 13.42C24.4798 12.6689 23.8709 12.06 23.1198 12.06C22.3687 12.06 21.7598 12.6689 21.7598 13.42C21.7598 14.1711 22.3687 14.78 23.1198 14.78Z"
            fill={color ?? "#343434"}
          />
          <path
            d="M10.88 14.78C11.6311 14.78 12.24 14.1711 12.24 13.42C12.24 12.6689 11.6311 12.06 10.88 12.06C10.1289 12.06 9.52002 12.6689 9.52002 13.42C9.52002 14.1711 10.1289 14.78 10.88 14.78Z"
            fill={color ?? "#343434"}
          />
        </g>
        <defs>
          <clipPath id="clip0_233_612">
            <rect
              width="34"
              height="34"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default CartIcon;
