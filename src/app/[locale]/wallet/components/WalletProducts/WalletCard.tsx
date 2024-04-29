import React from "react";
import { WalletCardWrapper } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import { P4 } from "@/app/[locale]/components/Typography";
import theme from "@/app/[locale]/utils/theme";

const WalletCard = ({ wallet }: any) => {
  return (
    <WalletCardWrapper
      backgroundColor={
        wallet.type === "minus"
          ? theme.colors.error[300]
          : theme.colors.success[200]
      }
    >
      <Flex justify="space-between" fullWidth>
        <P4 color={theme.colors.white}>{wallet.description}</P4>
      </Flex>
    </WalletCardWrapper>
  );
};

export default WalletCard;
