"use client";
import styled from "@emotion/styled";
import theme from "../../../utils/theme";

export const HeadingWrapper = styled.div<{extraPadding?: boolean}>`
  span {
    color: ${theme.colors.primaryColor};
  }
  margin-top: ${({extraPadding}) => extraPadding ? "81px" : "57px" };
`;
