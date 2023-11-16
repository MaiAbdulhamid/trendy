import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BreadcrumbContainer = styled.div`
  padding: 1rem 0;
  
  .breadcrumb--list {
    & > li {
      display: inline-block;

      & p:after {
        margin: 0 10px;
      }

      &:last-of-type p::after {
        display: none;
      }
    }
  }
`;
