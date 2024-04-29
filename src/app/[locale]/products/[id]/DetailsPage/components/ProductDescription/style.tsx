import devices from "@/app/[locale]/utils/devices";
import styled from "@emotion/styled";

export const ProductDescriptionContainer = styled.div`
  margin: 40px 0;

  ${devices.smallMax} {
    margin: 15px 0;
  }
  
  & > div {
    font-size: 1.1rem;
    line-height: 1.7;
  }
`;
