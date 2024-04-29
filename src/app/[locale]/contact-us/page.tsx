'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import ContactUsPage from './components/ContactUsPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  
  return (
    <>
      <Header />
      <ContactUsPage />
      <Footer />
    </>
  )
}

export default ContactUs;