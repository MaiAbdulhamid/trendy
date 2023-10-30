import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Prop = {
  radius?: number;
};
export const BannerBox = styled.div<Prop>`
  border-radius: 10px;
  width: 100%;
  height: 100%;

  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius}px;
      overflow: hidden;
    `}

  img{
    width: 100%;
    height: 100%;
  }
`;
