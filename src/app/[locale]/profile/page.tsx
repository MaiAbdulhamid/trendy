'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfilePage from './components/ProfilePage';

const Wishlist = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  return (
    <>
      <Header />
      <ProfilePage />
      <Footer />
    </>
  )
}

export default Wishlist