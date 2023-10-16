import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button as MantineButton } from "@mantine/core";
import { ButtonProps } from "./type";
import theme from "../../utils/theme";
import devices from "../../utils/devices";

export const BaseButton = styled(MantineButton)<ButtonProps>`
  padding: 0 16px;
  font-weight: normal;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  ${({ fullWidth }) => {
    return (
      fullWidth &&
      css`
        width: 100%;
      `
    );
  }}

  ${({ size }) => {
    return (
      !size &&
      css`
        height: 40px;
      `
    );
  }}
  ${({ variant }) => {
    return (
      variant === "primary" &&
      css`
        & .mantine-Button-label {
          color: ${theme.colors.black[300]} !important;
        }
        background: ${theme.colors.primaryColor};
        border-color: ${theme.colors.primaryColor};
      `
    );
  }}

  ${({ noStyle, fullWidth, color }) => {
    return (
      noStyle &&
      css`
        background: none;
        padding: 0;
        color: ${color ?? theme.colors.black[300]};
        border-radius: 0;
        border: none;
        width: ${!fullWidth ? "auto" : "100%"};
        &:hover {
          background: none;
        }

        &[data-disabled] {
          background: none;
          color: #eee;
          & p {
            color: #ccc;
          }
        }
      `
    );
  }}

  ${devices.mediumMax} {
    font-size: 15px;
  }

  ${devices.smallMax} {
    font-size: 11px;
    height: 40px;
    border-width: 1px;
  }
`;
