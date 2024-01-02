import React from "react";
import { SvgsTypes } from "./types";

const PencilIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "26"}
        height={size ?? "26"}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0872 7.4514L18.5484 2.91358C18.3975 2.76265 18.2183 2.64292 18.0211 2.56123C17.824 2.47954 17.6126 2.4375 17.3992 2.4375C17.1858 2.4375 16.9744 2.47954 16.7772 2.56123C16.5801 2.64292 16.4009 2.76265 16.25 2.91358L3.72634 15.4373C3.57478 15.5876 3.45463 15.7666 3.37286 15.9638C3.29108 16.161 3.24933 16.3724 3.25001 16.5859V21.1248C3.25001 21.5557 3.42121 21.9691 3.72596 22.2738C4.03071 22.5785 4.44403 22.7498 4.87501 22.7498H21.9375C22.153 22.7498 22.3597 22.6642 22.512 22.5118C22.6644 22.3594 22.75 22.1527 22.75 21.9373C22.75 21.7218 22.6644 21.5151 22.512 21.3627C22.3597 21.2104 22.153 21.1248 21.9375 21.1248H11.7122L23.0872 9.74975C23.2381 9.59885 23.3579 9.4197 23.4395 9.22252C23.5212 9.02534 23.5633 8.814 23.5633 8.60057C23.5633 8.38714 23.5212 8.17581 23.4395 7.97863C23.3579 7.78145 23.2381 7.60229 23.0872 7.4514ZM9.41384 21.1248H4.87501V16.5859L13.8125 7.64843L18.3513 12.1873L9.41384 21.1248ZM19.5 11.0386L14.9622 6.49975L17.3997 4.06225L21.9375 8.60108L19.5 11.0386Z"
          fill={color ?? "#DEB156"}
        />
      </svg>
    </>
  );
};

export default PencilIcon;