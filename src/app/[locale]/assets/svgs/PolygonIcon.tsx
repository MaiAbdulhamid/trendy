import React from "react";
import { SvgsTypes } from "./types";

const PolygonIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "31"}
        height="20"
        viewBox="0 0 31 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.5 0L30.6554 19.5H0.344556L15.5 0Z" fill={color ?? "#DEB156"} />
      </svg>
    </>
  );
};

export default PolygonIcon;
