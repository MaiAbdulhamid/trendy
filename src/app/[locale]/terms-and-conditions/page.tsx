'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  
  return (
    <>
      <Header />
      <TermsAndConditionsPage />
      <Footer />
    </>
  )
}

export default PrivacyPolicy;