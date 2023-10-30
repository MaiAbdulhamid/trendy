import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../utils/theme";

export const DottedLine = styled.div`
  height: 2px;
  margin: 40px 0;

  background: repeating-linear-gradient(
      to right,
      ${theme.colors.gray[200]} 3px,
      ${theme.colors.gray[200]} 10px,
      transparent 12px,
      transparent 28px
    )
    bottom;
  background-size: 100% 2px;
  background-repeat: no-repeat;
`;

export const Line = styled.hr<any>`
  height: 2px;
  margin: 20px 0;
  ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}
`;
