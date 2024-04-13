import styled from "@emotion/styled";
import { Flex } from "../../Grids";
import theme from "@/app/[locale]/utils/theme";

export const IconsBarContainer = styled(Flex)`
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 999;
  padding: 10px 20px;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
  left: 0;
  right: 0;
`;

export const DrawerWrapper = styled.div`
  padding-bottom: 5rem;
  .menu--links {
    & > a {
      margin: 10px 20px;
      padding: 0 5px;
      span {
        font-size: 14px;
      }
    }
  }

  .account--icons {
    max-width: 320px;
    margin: 0 auto 15px;
  }
`;

export const IconMenuWrapper = styled(Flex)`
  background: ${theme.colors.primaryColor};
  width: 55px;
  height: 55px;
  border-radius: 5px;
  gap: 5px;
  margin-top: 1rem;
  /* padding: 2px 0; */
`;

export const IconWrapper = styled(Flex)`
  text-align: center;
  /* & > svg {
    margin-bottom: 10px;
    path {
      fill: ${theme.colors.gray[500]};
    }
  }

  & > small {
    color: ${theme.colors.gray[500]};
  } */
`;

export const TopBarContainer = styled(Flex)`
  padding: 12px 10px;
  & > a img {
    max-width: 50px;
  }

  .branches--wrapper {
    button {
      border-color: ${theme.colors.gray[200]};
      .end--arrow {
        margin-right: 10px;
      }
      .text--branch {
        max-width: 70px;
        overflow: hidden;
      }
    }
  }
`;
