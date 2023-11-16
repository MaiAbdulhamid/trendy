import devices from "@/app/[locale]/utils/devices";
import theme from "@/app/[locale]/utils/theme";
import styled from "@emotion/styled";

export const PriceContainer = styled.div`
  margin: 15px 0 25px 0;
  display: flex;
  justify-content: space-between;

  ${devices.smallMax} {
    margin-bottom: 15px;
  }
`;
export const IsExpress = styled.div`
  background: #EA4335;
  padding: 10px 30px;
  border-radius: 25px 0px 25px 0px;
  text-align: center;
  color: ${theme.colors.white}
`;
export const IsFreeShipping = styled.div`
  background: #44DDEF;
  color: ${theme.colors.white};
  padding: 10px 30px;
  border-radius: 5px;
  text-align: center;
`;


