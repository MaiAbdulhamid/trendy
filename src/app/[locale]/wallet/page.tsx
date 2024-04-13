'use client';
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import WishlistPage from './components/WalletPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from "next/navigation";
import cache from '@mongez/cache';

const Wishlist = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, [])

  const router = useRouter();

  useEffect(() => {
    if (!cache.get("token")) {
      router.push("/auth?mode=login");
    }
  }, [router]);
  if(isPageLoading) return <Loader />;
  return (
    <>
      <Header />
      <WishlistPage />
      <Footer />
    </>
  )
}

export default Wishlist