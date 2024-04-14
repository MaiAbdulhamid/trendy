"use client";
import React, { useCallback, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutPage from "./components/CheckoutPage";
import cache from "@mongez/cache";
import AddAddress from "../addresses/add-address/page";
import axiosInstance from "../lib/axios";
import Is from "@mongez/supportive-is";

const PrivacyPolicy = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  // const [address, setAddress] = useState();

  // const fetchAddress = useCallback(() => {
  //   return cache.get("address");
  // }, []);

  // useEffect(() => {
  //   setAddress(fetchAddress());
  // }, []);

  const [addresses, setAddresses] = useState(null);

  const getAddresses = async () => {
    try {
      const response = await axiosInstance.get("address");
      setAddresses(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAddresses();
  }, []);
  if (isPageLoading) return <Loader />;

  return (
    <>
      {!Is.empty(addresses) ? (
        <>
          <Header />
          <CheckoutPage />
          <Footer />
        </>
      ) : <AddAddress />} 
      {/* {Is.empty(addresses) && <AddAddress />} */}
    </>
  );
};

export default PrivacyPolicy;
