'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorPage from './components/ErrorPage';

const Error = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  if(isPageLoading) return <Loader />;
  
  return (
    <>
      <Header />
      <ErrorPage />
      <Footer />
    </>
  )
}

export default Error;