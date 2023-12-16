import React from "react";
import { SvgsTypes } from "./types";

const HeartFillIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "24"}
        height="21"
        viewBox="0 0 24 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6891 0.0820312C14.6871 0.0820312 12.8509 1.01789 11.6663 2.5579C10.4817 1.01789 8.64552 0.0820312 6.6435 0.0820312C3.14292 0.0820312 0.293892 2.94291 0.293892 6.46125C0.293892 8.11381 0.921745 9.68344 2.06491 10.8799L11.0207 19.9245L11.6663 20.5761L12.3119 19.9245L21.096 11.0517C22.3398 9.84929 23.0387 8.2145 23.0387 6.46125C23.0387 2.94291 20.1897 0.0820312 16.6891 0.0820312Z"
          fill={color ?? "#DEB156"}
        />
      </svg>
    </>
  );
};

export default HeartFillIcon;
