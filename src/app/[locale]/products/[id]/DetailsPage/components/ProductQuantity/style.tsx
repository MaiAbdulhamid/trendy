import devices from "@/app/[locale]/utils/devices";
import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";
import { Group } from "@mantine/core";

export const ProductQuantityContainer = styled(Group)`
  margin-top: 30px;
  .quantity--input--container {
    margin-bottom: 20px;
  }

  .plus--button,
  .minus--button {
    border: none;
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .add--to--cart {
    box-shadow: 0px 15px 37px rgba(68, 36, 25, 0.28);
    ${devices.smallMax} {
      height: 45px;
    }
  }
  input {
    font-family: Arial;
    text-align: center;
    border: none;
    max-width: 60px;
  }

  button {
    border-color: ${theme.colors.primaryColor};
    border-width: 2px;
  }
`;
