import styled from "@emotion/styled";
import { Group } from "@mantine/core";
import WishlistButton from "../Button/WishlistButton";
import { P4 } from "../Typography";
import devices from "../../utils/devices";
import theme from "../../utils/theme";
import CartButton from "../Button/CartButton";

export const ProductBox = styled.div`

  margin: 0 0 20px;
  position: relative;
  img{
    max-width: 100%;
    border-radius: 5px;
    width: 100%;
    height: 390px;
  }
  .price--before{
    color: #AEABA4;
  }
  ${devices.smallMax} {
    border-radius: 12px;
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 13px;
  left: 0;
  z-index: 100;
`;
export const IsExpress = styled.div`
  background: #EA4335;
  padding: 10px 30px;
  border-radius: 25px 0px 25px 0px;
  text-align: center
`;
export const IsDiscount = styled.div`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
  padding: 10px 30px;
  border-radius: 5px;
  text-align: center;
  width: fit-content;
`;
export const IsFreeShipping = styled.div`
  background: #44DDEF;
  color: ${theme.colors.white};
  padding: 10px 30px;
  border-radius: 5px;
  text-align: center;
`;

export const ProductWishlistButton = styled(WishlistButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 1s all ease-in-out;
  /* display: none; */
  ${devices.smallMax} {
    top: 10px;
    left: 10px;
  }
`;

export const ImageBox = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const StyledCartButton = styled(CartButton)`
  transition: 1s all ease-in-out;
  position: absolute;
  bottom: 0px ;
`

export const CaptionBox = styled.div`
  position: relative;
  margin-bottom: 15px;
  display: flex;
  /* align-items: end; */
  flex-direction: column;
  width: 100%;
`;
