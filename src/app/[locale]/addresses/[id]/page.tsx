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
  const [address, setAddress] = useState<any>();
  const params = useParams();

  const fetchAddresses = useCallback(() => {
    return cache.get('addresses');
  }, []);

  useEffect(() => {
    setIsPageLoading(false);
    setAddress(fetchAddresses().find((address: any) => address.id == params.id));
  }, [fetchAddresses]);

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