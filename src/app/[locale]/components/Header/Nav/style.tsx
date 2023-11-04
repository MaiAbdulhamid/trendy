"use client";
import theme from "../../../utils/theme";
import styled from "@emotion/styled";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #f1f1f1;
  height: 64px;
  padding: 1rem;
  a:hover,
  a:focus {
    color: ${theme.colors.primaryColor};
  }
  a.active {
    color: ${theme.colors.primaryColor};
  }
`;

export const HoverDropdown = styled.div`
  width: 100%;
  border-top: 12px solid ${theme.colors.primaryColor};
  padding: 1rem;
  .section {
    padding: 2rem;
    a {
      height: 60px;
      border-bottom: 0.5px solid #0000004d;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;
export const PolygonWrapper = styled.div`
  position: relative;

  svg{
    position: absolute;
    z-index: 100;
    left: 50%;
  }
`
