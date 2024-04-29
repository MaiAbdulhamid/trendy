import styled from "@emotion/styled";
import devices from "../../utils/devices";
import { Container } from "../Grids";

export const SliderContainer = styled.div``;

export const ProductsContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  ${devices.smallMax} {
    margin-top: 20px;
  }
`;
