import React from "react";
import { SvgsTypes } from "./types";

const RemoveIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "38"}
        height={size ?? "38"}
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.833 17.417V26.917"
          stroke={color ?? "#DEB156"}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.167 17.417V26.917"
          stroke={color ?? "#DEB156"}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.33301 11.083H31.6663"
          stroke={color ?? "#DEB156"}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 11.083H19H28.5V28.4997C28.5 31.1231 26.3734 33.2497 23.75 33.2497H14.25C11.6267 33.2497 9.5 31.1231 9.5 28.4997V11.083Z"
          stroke={color ?? "#DEB156"}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.25 7.91667C14.25 6.16776 15.6678 4.75 17.4167 4.75H20.5833C22.3323 4.75 23.75 6.16776 23.75 7.91667V11.0833H14.25V7.91667Z"
          stroke={color ?? "#DEB156"}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default RemoveIcon;
