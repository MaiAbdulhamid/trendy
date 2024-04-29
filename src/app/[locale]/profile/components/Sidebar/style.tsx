import devices from "../../../utils/devices";
import theme from "../../../utils/theme";
import styled from "@emotion/styled";

export const WrapperDropdown = styled.div`
  .mantine-Menu-item {
    padding: 15px;
    /* border-block-end: 1px solid #ddd; */
    border-radius: 0;
    div {
      align-items: center;
    }
    svg {
      margin-left: 10px;
    }
    :hover,
    &.active {
      opacity: 0.9;
      background-color: ${theme.colors.primaryColor};
      p {
        color: ${theme.colors.white};
      }
      svg {
        color: ${theme.colors.white};
        path {
          fill: ${theme.colors.white};
        }
      }
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  border-radius: 15px;
  border: 1px solid ${theme.colors.gray[200]};
`;
export const Wrapper = styled.div`
  .mantine-Menu-dropdown {
    /* margin-left: 40px; */
    width: auto !important;
    padding: 0;
    ${devices.smallMax} {
      margin-left: 10px;
    }
  }
  a {
    :hover,
    :focus,
    :active {
      color: ${theme.colors.primaryColor};
      svg {
        path {
          fill: ${theme.colors.primaryColor};
        }
      }
    }
  }
`;

export const Hr = styled.hr`
  color: ${theme.colors.gray[200]};
  border: 0;
  border-top: 1px solid ${theme.colors.gray[200]};
`;
