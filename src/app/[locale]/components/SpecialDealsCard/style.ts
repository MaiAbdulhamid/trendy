import styled from "@emotion/styled";
import devices from "../../utils/devices";
import theme from "../../utils/theme";

export const ProductBox = styled.div`

  margin: 0 0 20px;
  position: relative;
  img{
    max-width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .price--before{
    color: #AEABA4;
    text-decoration-line: line-through;

  }
  ${devices.smallMax} {
    border-radius: 12px;
  }
`;

export const ImageBox = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const StyledTitle = styled.div<any>`
  transition: 1s all ease-in-out;
  position: relative;
  top: -20px;
  background: #8EC9D0;
  color: ${theme.colors.white};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  padding: 3rem;
`
