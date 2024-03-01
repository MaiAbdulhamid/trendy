"use client";
import React, { useCallback, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutPage from "./components/CheckoutPage";
import cache from "@mongez/cache";
import AddAddress from "../addresses/add-address/page";

const PrivacyPolicy = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  const [address, setAddress] = useState();

  const fetchAddress = useCallback(() => {
    return cache.get("address");
  }, []);

  useEffect(() => {
    setAddress(fetchAddress());
  }, []);

  if (isPageLoading) return <Loader />;

  return (
    <>
      {address && (
        <>
          <Header />
          <CheckoutPage />
          <Footer />
        </>
      )} 
      {!address && <AddAddress />}
    </>
  );
};

export default PrivacyPolicy;
