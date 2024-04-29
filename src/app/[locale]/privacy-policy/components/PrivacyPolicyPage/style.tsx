import devices from "@/app/[locale]/utils/devices";
import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const PrivacyPolicyPageWrapper = styled.div`
  margin-top: 2rem;
`;

export const Card = styled.div`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #3434344d;
  margin: 0.5rem 0;
  background: #fff;
  padding-right: 7rem;
  overflow: scroll;
  ${devices.largeMax}{
    padding-right: 2rem;
  }
`;
