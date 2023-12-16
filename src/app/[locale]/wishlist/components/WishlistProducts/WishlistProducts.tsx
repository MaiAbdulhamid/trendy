import { Col } from '@/app/[locale]/components/Grids';
import ProductCard from '@/app/[locale]/components/ProductCard';
import { H2, P4 } from '@/app/[locale]/components/Typography';
import axiosInstance from '@/app/[locale]/lib/axios'
import { Grid } from '@mantine/core';
import Is from '@mongez/supportive-is';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'

const WishlistProducts = () => {
  const trans = useTranslations("Products");
  
  const [wishlist, setWishlist] = useState([]);

  const getWishlist =async () => {
    try {
      const response = await axiosInstance.get('wishlist');
      setWishlist(response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getWishlist()
  }, []);

  return (
    <>
      <H2>{trans('wishlist')}</H2>
      {Is.empty(wishlist) ? (
        <P4 textAlign="center">{trans("noResults")}</P4>
      ) : (
        <Grid>
          {wishlist.map((product: any) => (
            <Col span={4} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Grid>
      )}
    </>
  )
}

export default WishlistProducts