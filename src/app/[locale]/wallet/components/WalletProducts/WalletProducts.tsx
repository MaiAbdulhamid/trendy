import { Col } from "@/app/[locale]/components/Grids";
import ProductCard from "@/app/[locale]/components/ProductCard";
import { H2, P4 } from "@/app/[locale]/components/Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { Grid } from "@mantine/core";
import cache from "@mongez/cache";
import Is from "@mongez/supportive-is";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";
import WalletCard from "./WalletCard";
import { WalletBalanceWrapper } from "./style";
import theme from "@/app/[locale]/utils/theme";

const WalletProducts = () => {
  const trans = useTranslations("Products");

  const [wallet, setWallet] = useState([]);
  const [balance, setBalance] = useState(0);

  const getWallet = async () => {
    try {
      const response = await axiosInstance.get("user/wallet");
      setWallet(response.data.data.data);
      setBalance(response.data.data.balance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <>
      <H2>{trans("wallet")}</H2>
      <WalletBalanceWrapper>
        <P4 textAlign="center" color={theme.colors.white}>{trans('walletBalance')}</P4>
        <P4 textAlign="center" color={theme.colors.white}>{balance}</P4>
      </WalletBalanceWrapper>
      {Is.empty(wallet) ? (
        <P4 textAlign="center">{trans('noOperations')}</P4>
      ) : (
        <Grid>
          {wallet.map((wallet: any) => (
            <Col span={4} key={wallet.id}>
              <WalletCard wallet={wallet} />
            </Col>
          ))}
        </Grid>
      )}
    </>
  );
};

export default WalletProducts;
