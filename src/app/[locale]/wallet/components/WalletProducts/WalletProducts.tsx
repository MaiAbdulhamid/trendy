import { Col } from '@/app/[locale]/components/Grids';
import ProductCard from '@/app/[locale]/components/ProductCard';
import { H2, P4 } from '@/app/[locale]/components/Typography';
import axiosInstance from '@/app/[locale]/lib/axios'
import { Grid } from '@mantine/core';
import cache from '@mongez/cache';
import Is from '@mongez/supportive-is';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useState } from 'react'

const WalletProducts = () => {
  const trans = useTranslations("Products");
  
  const [wallet, setWallet] = useState([]);

  const getWallet =async () => {
    try {
      const response = await axiosInstance.get('user/wallet');
      setWallet(response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getWallet()
  }, []);
  
  return (
    <>
      <H2>{trans('wallet')}</H2>
      {Is.empty(wallet) ? (
        <P4 textAlign="center">{trans("noResults")}</P4>
      ) : (
        <Grid>
          {wallet.map((product: any) => (
            <Col span={4} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Grid>
      )}
    </>
  )
}

export default WalletProducts