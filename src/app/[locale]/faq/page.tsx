'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import FaqPage from './components/FaqPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Faq = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  
  return (
    <>
      <Header />
      <FaqPage />
      <Footer />
    </>
  )
}

export default Faq;