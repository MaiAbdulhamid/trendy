"use client";
import styled from "@emotion/styled";
import theme from "../../utils/theme";

export const ModalWrapper = styled.div`
  padding: 57px 118px;
  .code-input{
    width: 70px;
    height: 70px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.gray[200]};
    /* background: linear-gradient(0deg, rgba(52, 52, 52, 0.2), rgba(52, 52, 52, 0.2)),
linear-gradient(0deg, rgba(252, 252, 252, 0.2), rgba(252, 252, 252, 0.2)); */

    text-align: center;
    font-size: 27px;
    margin: 20px 0;

  }
`
