'use client';
import React, { useEffect, useState } from 'react'
import Header from "./components/Header";
import HomePage from "./home/HomePage";
import Loader from './components/Loader';

export default function Home() {
  // const [isPageLoading, setIsPageLoading] = useState(true);
  // useEffect(() => {
  //   setIsPageLoading(false)
  // }, [])

  // if(isPageLoading) return <Loader />;
  
  return (
    <>    
      <Header />
      <HomePage />
    </>
  )
}
