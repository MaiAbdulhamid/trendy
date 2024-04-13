import theme from "../../utils/theme";
import { SvgsTypes } from "./types";

const MenuIcon = ({ size, color }: SvgsTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
    >
      <path
        fill={color || theme.colors.black[400]}
        fillRule="evenodd"
        d="M4 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM2.75 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM12 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM10.75 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM20 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM18.75 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default MenuIcon;
