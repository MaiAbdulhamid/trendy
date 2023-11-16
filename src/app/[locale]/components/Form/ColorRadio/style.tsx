import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Radio } from "@mantine/core";
import { RadioProps } from "./type";
import theme from "@/app/[locale]/utils/theme";

export const RadioStyled = styled(Radio)<RadioProps>`
  .mantine-Radio-radio {
    width: 90px;
    height: 39px;
    padding: 11px 0px 8px 0px;
    border-radius: 5px;
    border: 1px;
    border: 1px solid;
    background: transparent;

    &:checked {
      border: 1px solid ${theme.colors.primaryColor};

      & + .__mantine-ref-icon {
        color: ${theme.colors.primaryColor};
        width: 14px;
        height: 14px;
        display: none;
        top: calc(50% - 7px);
      }
    }
  }
  .mantine-Radio-inner{
    & svg{
      opacity: 0;
    }
  }
  .mantine-Radio-labelWrapper{
    width: 100%;
    height: 100%;
    line-height: inherit;
  }
`;
