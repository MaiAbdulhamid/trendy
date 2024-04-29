import { Container } from "../../../components/Grids";
import theme from "../../../utils/theme";
import styled from "@emotion/styled";

export const PromoContainer = styled(Container)`
  .bg {
    background-color: #074432;
    height: 91px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
  p{
    color: #fff;
    .primary{
      color: ${theme.colors.primaryColor}
    }
  }
`;
