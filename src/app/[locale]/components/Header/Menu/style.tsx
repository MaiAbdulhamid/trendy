import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  margin: 30px 0;
  border-top: 2px solid #f7f7fa;
  & > div > a,
  & > div > span > a {
    display: block;
    border-top: 2px solid transparent;
    margin-top: -2px;
    transition: 0.2s ease-in-out;
    padding-top: 25px;
    &:hover {
      border-color: ${theme.colors.primaryColor};
    }
  }
`;
