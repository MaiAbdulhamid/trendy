'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import WishlistPage from './components/WalletPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wishlist = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  return (
    <>
      <Header />
      <WishlistPage />
      <Footer />
    </>
  )
}

export default Wishlist