import React from "react";
import { SvgsTypes } from "./types";

const SearchIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={color ?? "24"}
        height={color ?? "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5312 14.625C18.4688 13.15 19.0187 11.4 19.0187 9.51875C19.0187 4.2625 14.7625 0 9.5125 0C4.25625 0 0 4.2625 0 9.51875C0 14.775 4.25625 19.0375 9.50625 19.0375C11.4125 19.0375 13.1875 18.475 14.675 17.5125L15.1063 17.2125L21.8937 24L24 21.8563L17.2188 15.0688L17.5312 14.625ZM14.8375 4.2C16.2563 5.61875 17.0375 7.50625 17.0375 9.5125C17.0375 11.5187 16.2563 13.4063 14.8375 14.825C13.4187 16.2438 11.5312 17.025 9.525 17.025C7.51875 17.025 5.63125 16.2438 4.2125 14.825C2.79375 13.4063 2.0125 11.5187 2.0125 9.5125C2.0125 7.50625 2.79375 5.61875 4.2125 4.2C5.63125 2.78125 7.51875 2 9.525 2C11.5312 2 13.4187 2.78125 14.8375 4.2Z"
          fill={color ?? "#343434"}
          fill-opacity="0.5"
        />
      </svg>
    </>
  );
};

export default SearchIcon;
