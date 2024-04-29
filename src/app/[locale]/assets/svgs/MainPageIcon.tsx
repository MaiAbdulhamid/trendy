import theme from "../../utils/theme";
import { SvgsTypes } from "./types";

const MainPageIcon = ({ size, color }: SvgsTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
    >
      <path
        fill={color || theme.colors.primaryColor}
        d="M12.75 17.82a.75.75 0 10-1.5 0v2a.75.75 0 001.5 0v-2z"
      ></path>
      <path
        fill={color || theme.colors.primaryColor}
        fillRule="evenodd"
        d="M12.21 1.254a5.743 5.743 0 00-.42 0c-.928.034-1.763.35-2.679.874-.892.512-1.92 1.258-3.223 2.205l-.07.052c-1.304.946-2.331 1.693-3.093 2.383-.783.709-1.34 1.406-1.66 2.277a5.752 5.752 0 00-.13.401c-.254.893-.212 1.784.004 2.817.21 1.007.603 2.215 1.101 3.747l.027.083c.498 1.532.89 2.74 1.312 3.678.432.963.922 1.71 1.652 2.282.11.086.225.17.341.247.735.494 1.552.732 2.538.85 1.048.128 2.359.128 4.04.128h.1c1.681 0 2.992 0 4.04-.127.986-.12 1.803-.357 2.538-.85.116-.079.23-.162.34-.248.731-.573 1.221-1.319 1.653-2.282.422-.938.814-2.146 1.312-3.678l.027-.083c.498-1.532.89-2.74 1.1-3.747.217-1.033.26-1.924.005-2.817a5.753 5.753 0 00-.13-.4c-.32-.872-.877-1.57-1.66-2.278-.762-.69-1.789-1.437-3.092-2.383l-.071-.052c-1.304-.947-2.33-1.693-3.223-2.205-.916-.525-1.75-.84-2.678-.874zm-.366 1.499c.104-.004.208-.004.312 0 .595.022 1.188.219 1.987.676.814.467 1.776 1.165 3.122 2.143 1.347.979 2.308 1.678 3.003 2.308.683.618 1.053 1.121 1.258 1.68.036.098.068.197.096.297.163.573.16 1.198-.03 2.099-.191.918-.558 2.049-1.072 3.632-.515 1.583-.883 2.713-1.267 3.569-.377.84-.74 1.348-1.21 1.715a3.308 3.308 0 01-1.293.637v-3.69a4.75 4.75 0 10-9.5 0v3.69a3.308 3.308 0 01-1.293-.637c-.469-.367-.833-.875-1.21-1.715-.384-.856-.752-1.986-1.267-3.57-.514-1.582-.88-2.713-1.073-3.631-.188-.901-.192-1.526-.03-2.099.03-.1.061-.199.097-.296.205-.56.575-1.063 1.258-1.681.695-.63 1.656-1.33 3.003-2.308C8.08 4.594 9.043 3.896 9.857 3.43c.799-.457 1.392-.654 1.987-.676zM12 14.57a3.25 3.25 0 013.25 3.25v3.902c-.843.055-1.887.056-3.25.056s-2.407 0-3.25-.056V17.82A3.25 3.25 0 0112 14.57z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default MainPageIcon;
