import { SvgsTypes } from "./types";

const SuccessIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="250"
        height="250"
        viewBox="0 0 250 250"
        fill="none">
        <path
          d="M125 250C194.036 250 250 194.036 250 125C250 55.9645 194.036 0 125 0C55.9644 0 0 55.9645 0 125C0 194.036 55.9644 250 125 250Z"
          fill="#1AA15F"
        />
        <path
          d="M117.062 176.929C115.246 178.859 112.24 179.037 110.209 177.334L60.3243 135.516C54.0718 130.275 53.2565 120.955 58.5038 114.708C63.7451 108.468 73.0514 107.655 79.2952 112.892L107.811 136.809C109.842 138.513 112.849 138.335 114.666 136.405L167.983 79.7415C173.567 73.8072 182.902 73.518 188.843 79.0953C194.793 84.6818 195.082 94.0363 189.488 99.9796L117.062 176.929Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export default SuccessIcon;