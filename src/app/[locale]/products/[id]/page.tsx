"use client";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailsPage from "./DetailsPage";
import { useParams } from "next/navigation";
import axiosInstance from "../../lib/axios";
import { Container } from "../../components/Grids";
import Loader from "../../components/Loader";

const ProductDetails = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [product, setProduct] = useState<any>();
  const params = useParams();

  const fetchProduct = useCallback(async () => {
    try {
      const response: any = await axiosInstance.get(
        `products/details?id=${params.id}`
      );
      const data = response.data.data;
      setProduct(data);
    } catch (error: any) {
      console.log(error);
    }
  }, [params.id]);

  useEffect(() => {
    setIsPageLoading(false);
    fetchProduct();
  }, [params.id, fetchProduct]);

  if (isPageLoading) return <Loader />;

  return (
    <>
      <Header />
      <Container>{product && <DetailsPage product={product} />}</Container>
      <Footer />
    </>
  );
};

export default ProductDetails;
