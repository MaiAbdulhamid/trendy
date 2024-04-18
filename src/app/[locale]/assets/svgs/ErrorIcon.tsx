import { SvgsTypes } from "./types";

const ErrorIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="251"
        height="250"
        viewBox="0 0 251 250"
        fill="none">
        <g opacity="0.5">
          <path
            d="M250.392 125C250.392 194.035 194.428 250 125.392 250C56.3567 250 0.391846 194.035 0.391846 125C0.391846 55.9648 56.3567 0 125.392 0C194.428 0 250.392 55.9648 250.392 125Z"
            fill="#FF0000"
          />
        </g>
        <path
          d="M247.571 125.003C247.571 192.48 192.87 247.182 125.392 247.182C57.9148 247.182 3.21307 192.48 3.21307 125.003C3.21307 57.526 57.9148 2.82422 125.392 2.82422C192.87 2.82422 247.571 57.526 247.571 125.003Z"
          fill="#F45B2C"
        />
        <path
          d="M169.71 80.6836C169.71 80.6836 86.0402 164.354 81.2844 169.11L169.71 80.6836Z"
          fill="#FF0000"
        />
        <path
          d="M169.71 169.321L81.0735 80.6836L169.71 169.321Z"
          fill="#FF0000"
        />
        <path
          d="M170 81C170 81 86.3297 164.67 81.5739 169.426"
          stroke="white"
          stroke-width="27"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M170 169.637L81.363 81"
          stroke="white"
          stroke-width="27"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ErrorIcon;
