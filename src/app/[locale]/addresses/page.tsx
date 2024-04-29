'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddressesPage from './components/AddressesPage';

const Wishlist = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  return (
    <>
      <Header />
      <AddressesPage />
      <Footer />
    </>
  )
}

export default Wishlist