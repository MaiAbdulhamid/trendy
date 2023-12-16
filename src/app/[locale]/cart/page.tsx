'use client';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader';
import CartPage from './components/CartPage';
import cart from './utils/CartManager';

const Cart = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
    cart.load()
  }, [])

  if(isPageLoading) return <Loader />;
  return (
    <>
      <Header />
      <CartPage />
      <Footer />
    </>
  )
}

export default Cart