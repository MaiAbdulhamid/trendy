import isPropValid from "@emotion/is-prop-valid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  configureAdornment,
  configureFontSize,
  configureHover,
  configureTruncation,
  manageFontSize,
} from "./mixins";
import { StyledTextType } from "./types";

export const Text = styled("span", {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !["fontSize", "height", "color"].includes(prop),
})<StyledTextType>`
  ${({
    fontFamily,
    weight,
    color,
    textDecoration,
    textAlign,
    lineHeight,
    opacity,
  }) => css`
    font-family: ${fontFamily ? fontFamily : "inherit"};
    font-weight: ${weight || "normal"};
    text-decoration: ${textDecoration};
    text-align: ${textAlign};
    line-height: ${lineHeight};
    color: ${color || "#343434"};
    opacity: ${opacity};
    display: block;
  `}
  ${({ fontSize, length, isHeader }) =>
    fontSize &&
    configureFontSize(
      isHeader ? manageFontSize(fontSize, length || 1) : fontSize,
    )};
  ${({ capitalizeFirstLetter }) =>
    capitalizeFirstLetter &&
    css`
      &:first-letter {
        text-transform: capitalize;
      }
    `};
 ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};
  ${({ truncationWidth }) =>
    truncationWidth && configureTruncation(truncationWidth)};
  ${({ startAdornment }) =>
    startAdornment && configureAdornment(startAdornment, "before", "ar")};
  ${({ endAdornment }) =>
    endAdornment && configureAdornment(endAdornment, "after", "ar")};
  ${({ hover }) => hover && configureHover(hover)};
  ${({ direction }) =>
    direction &&
    css`
      direction: ${direction};
    `};
  // margin: 0;
`;
