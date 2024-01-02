"use client";
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import AddAddressForm from './components/AddAddressForm';
import { useParams } from 'next/navigation';
import Loader from '../../components/Loader';
import axiosInstance from '../../lib/axios';
import cache from '@mongez/cache';

const EditAddress = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [addresses, setAddresses] = useState<any>();
  const params = useParams();

  const fetchAddresses = useCallback(async () => {
    try {
      const response: any = await axiosInstance.get(
        `address`
      );
      const data = response.data.data.data;
      console.log(data)
      setAddresses(data);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setIsPageLoading(false);
    fetchAddresses();
  }, [fetchAddresses]);

  const address = addresses?.find((address: any) => address.id == params.id)

  useEffect(() => {
    cache.set('address', address);
  }, [address])

  if (isPageLoading) return <Loader />;

  return (
    <>
      <Header />
      <AddAddressForm useAddress={address} />
      <Footer />
    </>
  )
}

export default EditAddress;