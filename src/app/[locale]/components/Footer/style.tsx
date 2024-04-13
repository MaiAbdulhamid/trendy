import { css } from "@emotion/react";
import styled from "@emotion/styled";
import devices from "../../utils/devices";

export const FooterWrapper = styled.div`
  margin-top: 60px;
  background: #535357;
  border-radius: 5px;
  padding: 2rem;
  ${devices.largeMax}{
    .footer-columns{
      flex-direction: column;
    }
  }
`;

export const CopyrightWrapper = styled.div`
  padding: 1rem;
  text-align: center;
  ${devices.largeMax}{
    margin-bottom: 6rem;
  }
`;


