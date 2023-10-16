import isPropValid from "@emotion/is-prop-valid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import flexGapCalculator  from "./flexGapCalculator";
import { StyledFlexWrapper } from "./type";
import devices from "../../../utils/devices";

const Wrapper = styled("div", {
  shouldForwardProp: prop =>
    isPropValid(prop) &&
    !["gap", "width", "height", "direction"].includes(prop),
})<StyledFlexWrapper>`
  label: flex;
  display: flex;
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          width: fit-content;
        `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
    ${({ m }) =>
    m &&
    css`
      margin: ${typeof m === "number" ? `${m}px` : m};
    `}
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
    ${({ direction }) =>
    direction
      ? css`
          flex-direction: ${direction};
        `
      : css`
          flex-direction: row;
        `}
    ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
    ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
    ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
    ${({ gap, direction, persistentGap }) =>
    gap &&
    css`
      gap: ${gap};
      ${!persistentGap &&
      css`
        gap: calc(${gap} * 0.4);
        ${devices.medium} {
          gap: calc(${gap} * 0.6);
        }
        ${devices.xLarge} {
          gap: calc(${gap} * 0.8);
        }
        ${devices.xxLarge} {
          gap: ${gap};
        }
      `}
      @supports not (gap: ${gap}) {
        ${flexGapCalculator(gap, direction)}
      }
    `}
`;

export default Wrapper;
