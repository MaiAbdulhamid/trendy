import React from "react";
import { SvgsTypes } from "./types";

const FacebookIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "14"}
        height="25"
        viewBox="0 0 14 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.019 0.376953H9.62127C8.11936 0.376953 6.67897 1.01295 5.61696 2.14503C4.55495 3.27711 3.95832 4.81254 3.95832 6.41354V10.0355H0.560547V14.8648H3.95832V24.5233H8.48868V14.8648H11.8864L13.019 10.0355H8.48868V6.41354C8.48868 6.09334 8.608 5.78625 8.82041 5.55984C9.03281 5.33342 9.32089 5.20622 9.62127 5.20622H13.019V0.376953Z"
          fill={color ?? "white"}
        />
      </svg>
    </>
  );
};

export default FacebookIcon;
