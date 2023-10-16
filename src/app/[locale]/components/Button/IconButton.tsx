import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "./Button";
import { ButtonProps } from "./type";
import theme from "../../utils/theme";
import devices from "../../utils/devices";

type Props = ButtonProps & {
  sized: string;
};

export const IconButton = styled(Button)<Props>`
  ${({ sized }) => css`
    width: ${sized}px;
    height: ${sized}px;
  `};
  ${({ rounded, sized }) =>
    rounded &&
    css`
      border-radius: ${sized}px;
    `};
  padding: 0;
  svg path {
    transition: 0.2s ease-in-out;
  }

  &:hover {
    svg path {
      fill: ${theme.colors.white};
    }
  }
  ${devices.smallMax} {
    ${({ sized }) => css`
      width: ${sized}px;
      height: ${sized}px;
    `};
  }
`;
