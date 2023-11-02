import { Container } from "@/app/[locale]/components/Grids";
import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const NewDealsContainer = styled(Container)`
  .bg {
    background-color: #074432;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    overflow: hidden;
  }
  .wrapper{
    .details{
      min-width: 250px;
      margin: 0 3rem;
      p{
        letter-spacing: 5px
      }
    }
  }
  
`;
