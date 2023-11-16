import styled from "@emotion/styled";
import Button from "../Button";
import { CartButtonProps } from "./type";

export const CartButtonStyled = styled(Button)`
  height: 78px;
  display: flex;
  gap: 1rem;
  svg {
    margin-right: 1rem;
  }
`;
