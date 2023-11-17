import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";
import { Group } from "@mantine/core";

export const QuantityInputContainer = styled(Group)`
  /* margin-bottom: 20px; */
  width: 100%;
  display: flex;
  justify-content: space-between;

  input {
    font-family: Arial;
    text-align: center;
    border: none;
    max-width: 30px;
    padding: 0;
  }

  button {
    border-color: ${theme.colors.primaryColor};
    border-width: 2px;
    :disabled{
      border-color: ${theme.colors.lightGrey};
    }
  }
  .plus--button,
  .minus--button {
    background-color: ${theme.colors.primaryColor};
    border-color: ${theme.colors.primaryColor};
  }
  .mantine-NumberInput-input{
    background: transparent;
    font-weight: bold;
  }
`;
