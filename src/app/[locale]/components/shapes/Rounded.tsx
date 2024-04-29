import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  size: number;
};

export const RoundedShape = styled.div<Props>`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `};
  border-radius: 50%;
  overflow: hidden;
`;
