import { Col, Flex } from '@/app/[locale]/components/Grids';
import ProductCard from '@/app/[locale]/components/ProductCard';
import { H2, P4 } from '@/app/[locale]/components/Typography';
import axiosInstance from '@/app/[locale]/lib/axios'
import { Grid } from '@mantine/core';
import Is from '@mongez/supportive-is';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import Address from './Address';
import { addressesAtom } from '../atoms/addresses-atom';

const UserAddresses = () => {
  const trans = useTranslations("Addresses");
  
  const [addresses, setAddresses] = useState(addressesAtom.useValue().records);

  const getAddresses =async () => {
    try {
      const response = await axiosInstance.get('address');
      // setAddresses(response.data.data.data);
      addressesAtom.update({
        records: response.data.data.data,
      });
      setAddresses(addressesAtom.value.records)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getAddresses()
  }, []);
  console.log(addressesAtom.useValue().records)

  return (
    <>
      <H2>{trans('addresses')}</H2>
      {Is.empty(addresses) ? (
        <P4 textAlign="center">{trans("noResults")}</P4>
      ) : (
        <Grid>
          {addresses.map((address: any) => (
            <Flex key={address.id} direction='column' fullWidth>
              <Address address={address} />
            </Flex>
          ))}
        </Grid>
      )}
    </>
  )
}

export default UserAddresses;