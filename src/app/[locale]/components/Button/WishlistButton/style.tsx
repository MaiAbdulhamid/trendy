import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IconButton } from "../IconButton";
import { WishlistButtonProps } from "./type";
import theme from "@/app/[locale]/utils/theme";
import devices from "@/app/[locale]/utils/devices";

export const WishlistButtonStyled = styled(IconButton)<WishlistButtonProps>`
  &:hover {
    opacity: 0.8
  }

  ${({ variant }) =>
    variant == 'outline' &&
    css`
      box-shadow: none;
      border: 1px solid ${theme.colors.primaryColor};
    `}

  ${({ active }) =>
    active &&
    css`
      background: ${theme.colors.primaryColor};
      svg path {
        fill: none;
        stroke: ${theme.colors.white};
      }
    `}

  ${devices.smallMax} {
    width: 35px;
    height: 35px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
