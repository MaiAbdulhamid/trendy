"use client";
import Footer from "../components/Footer";
import { Col, Container } from "../components/Grids";
import { Grid } from "@mantine/core";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useCallback, useEffect, useState } from "react";
import CategoriesAndProducts from "./components/CategoriesAndProducts";
import Filters from "./components/Filters";
import axiosInstance from "../lib/axios";

function ProductsPage({ searchParams }: any) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response: any = await axiosInstance.get("products");
      const data = response.data.data.data;
      setFilteredProducts(data);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  const getProductsFilters = async (filters: any) => {
    let params = "";
    filters.map((filter: any) => {
      params += `&${new URLSearchParams(filter).toString()}`;
    });
    try {
      const response: any = await axiosInstance.get(`products?${params}`);
      const data = response.data.data.data;
      setFilteredProducts(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getSearchParamsProducts = async () => {
    let params = "";
    params += `&${new URLSearchParams(searchParams).toString()}`;
    try {
      const response: any = await axiosInstance.get(`products?${params}`);
      const data = response.data.data.data;
      setFilteredProducts(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsPageLoading(false);
    if(!searchParams){
      fetchProducts();
    }
  }, [searchParams]);

  useEffect(() => {
    if(searchParams){
      getSearchParamsProducts();
    }
  }, [searchParams]);

  if (isPageLoading) return <Loader />;

  return (
    <>
      <Header />
      <Container>
        <Grid>
          <Col span={3}>
            <Filters
              getProductsFilters={getProductsFilters}
              setFilteredProducts={setFilteredProducts}
            />
          </Col>
          <Col span={9}>
            <CategoriesAndProducts products={filteredProducts} />
          </Col>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
export default ProductsPage;
