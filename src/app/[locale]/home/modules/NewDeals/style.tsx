import devices from "@/app/[locale]/utils/devices";
import { Container } from "../../../components/Grids";
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
    ${devices.mediumMax}{
      img{
        width: auto;
      }
    }
  }
  .wrapper{
    ${devices.mediumMax}{
       flex-direction: column;
       max-width: 100%;
    }
    .details{
      min-width: 250px;
      margin: 0 3rem;
      
      ${devices.mediumMax}{
       margin: 0;
       min-width: auto;
       width: fit-content;
      }
      p{
        letter-spacing: 5px
      }
    }
  }
`;
