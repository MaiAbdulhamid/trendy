'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
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
      <PrivacyPolicyPage />
      <Footer />
    </>
  )
}

export default PrivacyPolicy;