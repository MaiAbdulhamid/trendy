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

  const [token, setToken] = useState(null);
  const [address, setAddress] = useState(null);

  const fetchToken = useCallback(() => {
    return cache.get("token");
  }, []);

  const fetchAddress = useCallback(() => {
    return cache.get("address");
  }, []);

  useEffect(() => {
    setToken(fetchToken());
    setAddress(fetchAddress());
  }, [setToken, setAddress]);

  if (isPageLoading) return <Loader />;

  return (
    <>
      {/* {token && (
        <>
          <Header />
          <CheckoutPage />
          <Footer />
        </>
      )} */}
      {!token && !address ? (
        <AddAddress />
      ) : (
        <>
          <Header />
          <CheckoutPage />
          <Footer />
        </>
      )}
    </>
  );
};

export default PrivacyPolicy;
