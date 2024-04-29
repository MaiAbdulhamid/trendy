import { Container } from "../../../components/Grids";
import { H3 } from "../../../components/Typography";
import devices from "../../../utils/devices";
import theme from "../../../utils/theme";
import styled from "@emotion/styled";

export const BrandContainer = styled.div`
  text-align: center;
  .category--image {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }
  > p {
    margin-top: 15px;
  }
`;

export const Title = styled(H3)`
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.primaryColor};
`;

export const BrandsContainer = styled(Container)`
  margin-top: 60px;

  .section--title {
    margin-bottom: 20px;
  }

  ${devices.smallMax} {
    margin-top: 20px;
  }
  .circle--image {
    ${devices.smallMax} {
      width: 90px;
      height: 90px;
    }
  }
`;
