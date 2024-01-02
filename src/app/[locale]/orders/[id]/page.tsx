"use client";
import React, { useCallback, useEffect, useState } from "react";
import DetailsPage from "./DetailsPage";
import { useParams } from "next/navigation";
import Loader from "@/app/[locale]/components/Loader";
import axiosInstance from "@/app/[locale]/lib/axios";
import Header from "@/app/[locale]/components/Header";
import Footer from "@/app/[locale]/components/Footer";
import { Container } from "@/app/[locale]/components/Grids";

const OrderDetails = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [order, setOrder] = useState<any>();
  const params = useParams();

  const fetchOrder = useCallback(async () => {
    try {
      const response: any = await axiosInstance.get(
        `order/details?order_id=${params.id}`
      );
      const data = response.data.data;
      setOrder(data);
    } catch (error: any) {
      console.log(error);
    }
  }, [params.id]);

  useEffect(() => {
    setIsPageLoading(false);
    fetchOrder();
  }, [params.id, fetchOrder]);

  if (isPageLoading) return <Loader />;

  return (
    <>
      <Header />
      <Container>{order && <DetailsPage order={order} />}</Container>
      <Footer />
    </>
  );
};

export default OrderDetails;
