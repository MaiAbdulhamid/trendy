"use client";
import React, { useCallback, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutPage from "./components/CheckoutPage";
import cache from "@mongez/cache";
import AddAddress from "../addresses/add-address/page";
import Is from "@mongez/supportive-is";

const PrivacyPolicy = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  const [token, setToken] = useState(null);
  const [guestToken, setGuestToken] = useState(null);
  const [addresses, setAddresses] = useState(null);

  const fetchToken = useCallback(() => {
    return cache.get("token");
  }, []);

  const fetchGuestToken = useCallback(() => {
    return cache.get("guestToken");
  }, []);

  const fetchAddresses = useCallback(() => {
    return cache.get("address");
  }, []);

  useEffect(() => {
    setToken(fetchToken());
    setGuestToken(fetchGuestToken())
    setAddresses(fetchAddresses())
  }, [setToken, setGuestToken, setAddresses]);

  if (isPageLoading) return <Loader />;

  return (
    <>
      {token && addresses || !token && addresses && (
        <>
          <Header />
          <CheckoutPage />
          <Footer />
        </>
      )} 
      {!token && !addresses && <AddAddress />}
    </>
  );
};

export default PrivacyPolicy;
