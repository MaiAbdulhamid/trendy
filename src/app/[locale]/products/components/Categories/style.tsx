import { Container } from "../../../components/Grids";
import { H3 } from "../../../components/Typography";
import devices from "../../../utils/devices";
import theme from "../../../utils/theme";
import styled from "@emotion/styled";

export const Title = styled(H3)`
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.primaryColor};
`;

export const CategoriesContainer = styled.div`
  margin-top: 60px;

  ${devices.smallMax} {
    margin-top: 20px;

    /* .title--card {
      word-spacing: 100px;
    } */
  }
  .circle--image {
    ${devices.smallMax} {
      width: 90px;
      height: 90px;
    }
  }
`;
