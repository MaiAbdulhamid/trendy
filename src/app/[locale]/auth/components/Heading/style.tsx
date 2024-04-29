"use client";
import styled from "@emotion/styled";
import theme from "../../../utils/theme";

export const HeadingWrapper = styled.div<{extraPadding?: boolean}>`
  h3{
    margin: 0
    span {
      color: ${theme.colors.primaryColor};
    }
  }
  margin-top: ${({extraPadding}) => extraPadding ? "55px" : "57px" };
`;
