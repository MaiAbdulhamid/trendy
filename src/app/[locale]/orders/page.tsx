'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrdersPage from './components/OrdersPage';

const Wishlist = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  return (
    <>
      <Header />
      <OrdersPage />
      <Footer />
    </>
  )
}

export default Wishlist