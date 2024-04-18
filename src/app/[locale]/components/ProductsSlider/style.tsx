import styled from "@emotion/styled";
import devices from "../../utils/devices";
import { Container } from "../Grids";

export const SliderContainer = styled.div``;

export const ProductsContainer = styled(Container)`
  margin-top: 60px;

  ${devices.smallMax} {
    margin-top: 20px;
  }
`;
export const ProductsContainerMedium = styled.div`
  margin-top: 60px;

  ${devices.smallMax} {
    margin-top: 20px;
  }
`;
