import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../../utils/theme";
type InputType = {
  theme?: any;
  error?: boolean;
};

export const Label = styled("label")<InputType>`
  label: input-label;
  display: flex;
  font-weight: 400;
  margin-top: 4px;
  align-items: center;
  p,
  & {
    font-size: 15px;
  }
  .super {
    color: ${theme.colors.error[200]};
  }

  &:focus-within {

  }
`;
