import { Flex } from "@/app/[locale]/components/Grids";
import devices from "@/app/[locale]/utils/devices";
import styled from "@emotion/styled";

export const AttachmentsWrapper = styled(Flex)`
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;

  ${devices.smallMax} {
    padding: 10px 15px;
    border-radius: 10px;
    margin-top: 14px;
  }

  .img {
    max-width: 40px;
  }
  `;

export const Wrapper = styled.div`
  h4{
    text-transform: uppercase;
  }
`
