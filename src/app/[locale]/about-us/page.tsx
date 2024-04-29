'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUsPage from './components/AboutUsPage';

const PrivacyPolicy = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  
  return (
    <>
      <Header />
      <AboutUsPage />
      <Footer />
    </>
  )
}

export default PrivacyPolicy;