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

  const fetchToken = useCallback(() => {
    return cache.get("token");

  }, []);

  const fetchGuestToken = useCallback(() => {
    return cache.get("guestToken");
  }, []);

  useEffect(() => {
    setToken(fetchToken());
    setGuestToken(fetchGuestToken())
  }, [setToken, setGuestToken]);

  if (isPageLoading) return <Loader />;

  return (
    <>
      {guestToken && !Is.empty(token) && (
        <>
          <Header />
          <CheckoutPage />
          <Footer />
        </>
      )} 
      {guestToken && Is.empty(token) && <AddAddress />}
    </>
  );
};

export default PrivacyPolicy;
