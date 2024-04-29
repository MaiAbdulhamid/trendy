import { Flex } from "@/app/[locale]/components/Grids";
import devices from "@/app/[locale]/utils/devices";
import styled from "@emotion/styled";

export const BrandWrapper = styled(Flex)`
  padding: 15px 0px 0;

  ${devices.smallMax} {
    padding: 10px 15px 0;
    margin-top: 14px;
  }
`;
