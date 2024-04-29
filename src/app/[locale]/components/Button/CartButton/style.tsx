import styled from "@emotion/styled";
import Button from "../Button";
import { CartButtonProps } from "./type";

export const CartButtonStyled = styled(Button)`
  height: 78px;
  display: flex;
  gap: 1rem;
  > span{
    width: 100%;
    justify-content: center;
  }
  svg {
    margin-right: 1rem;
  }
`;
