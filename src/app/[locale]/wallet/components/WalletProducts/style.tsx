import devices from "../../../utils/devices";
import theme from "../../../utils/theme";
import styled from "@emotion/styled";

export const WalletBalanceWrapper = styled.div`
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: 5px;
  padding: 20px;
  background-color: ${theme.colors.secondary[300]};
`;
export const WalletCardWrapper = styled.div<any>`

  background-color: ${(props) => props.backgroundColor};

`;