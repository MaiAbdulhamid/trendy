"use client";
import theme from "../../../utils/theme";
import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  .link {
    display: block;
    line-height: 1;
    padding: rem(8px) rem(12px);
    border-radius: var(--mantine-radius-sm);
    text-decoration: none;
    color: light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-0));
    font-size: var(--mantine-font-size-sm);
    font-weight: 500;

    @mixin hover {
      background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
    }
  }
`;

export const TotalResults = styled.div`
  padding: 1rem;
`;

export const Hr = styled.hr`
  color: ${theme.colors.gray[200]};
  border: 0; 
  border-top: 1px solid ${theme.colors.gray[200]};
`;

export const SearchWrapper = styled.div`
  width: 50%;
  margin: 3rem 1rem;
  input{
    border: 1px solid ${theme.colors.gray[200]};
  }
`;
export const MainSearchWrapper = styled.div`
  label: MainSearchWrapper;
  .mantine-Spotlight-action[data-selected]{
    background: transparent;
  }
`;

export const CountrySelectWrapper = styled.div`
  
`



