import React from "react";
import { SvgsTypes } from "./types";

const ArrowDownIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "22"}
        height="14"
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.983356 1.13989C1.61037 0.536986 2.60741 0.556535 3.21031 1.18355L11 9.45283L18.7897 1.18355C19.3926 0.556536 20.3896 0.536986 21.0166 1.13989C21.6437 1.74278 21.6632 2.73983 21.0603 3.36684L12.1353 12.8168C11.8384 13.1257 11.4284 13.3002 11 13.3002C10.5716 13.3002 10.1616 13.1257 9.86469 12.8168L0.93969 3.36684C0.33679 2.73983 0.35634 1.74278 0.983356 1.13989Z"
          fill={color ?? "#414042"}
        />
      </svg>
    </>
  );
};

export default ArrowDownIcon;
