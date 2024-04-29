import styled from "@emotion/styled";
import devices from "../../utils/devices";

export const SectionTitleStyled = styled.div`
  margin: 1rem 0;

  button {
    padding: 0 40px;
    ${devices.smallMax} {
      height: 35px;
      padding: 0 25px;
    }
  }

`;
