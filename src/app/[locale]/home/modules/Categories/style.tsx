import { Container } from "@/app/[locale]/components/Grids";
import { H3 } from "@/app/[locale]/components/Typography";
import devices from "@/app/[locale]/utils/devices";
import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const Title = styled(H3)`
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.primaryColor};
`;

export const CategoriesContainer = styled(Container)`
  margin-top: 60px;

  ${devices.smallMax} {
    margin-top: 20px;

    .title--card {
      word-spacing: 100px;
    }
  }
  .circle--image {
    ${devices.smallMax} {
      width: 90px;
      height: 90px;
    }
  }
`;
