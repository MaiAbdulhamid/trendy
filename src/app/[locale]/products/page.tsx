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
import cache from "@mongez/cache";

function ProductsPage({ searchParams }: any) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [categoryId, setCategoryId] = useState<any>("");
  const [filterId, setFilterId] = useState<any>("");

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
    const params = new URLSearchParams(filters).toString();
    try {
      const response: any = await axiosInstance.get(`products?${params}`);
      const data = response.data.data.data;
      setFilteredProducts(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getSearchParamsProducts = useCallback(async () => {
    let params = "";
    params += `&${new URLSearchParams(searchParams).toString()}`;
    try {
      const response: any = await axiosInstance.get(`products?${params}`);
      const data = response.data.data.data;
      setFilteredProducts(data);
    } catch (error: any) {
      console.log(error);
    }
  }, [
    searchParams.widget_id,
    searchParams[`category_id[]`],
    searchParams.q,
    searchParams[`brands[]`],
  ]);

  useEffect(() => {
    setIsPageLoading(false);
    if (!searchParams) {
      fetchProducts();
    }
  }, [fetchProducts, searchParams]);

  useEffect(() => {
    if (searchParams) {
      getSearchParamsProducts();
      setCategoryId(searchParams[`category_id[]`]);
      setFilterId(searchParams);
    }
  }, [searchParams, getSearchParamsProducts]);

  useEffect(() => {
    if (searchParams) {
      cache.set("filters", searchParams);
    }
    return () => {
      cache.remove("filters");
    };
  }, [searchParams]);

  if (isPageLoading) return <Loader />;

  return (
    <>
      <Header />
      <Container>
        <Grid>
          <Col span={{ base: 12, md: 3 }}>
            <Filters
              getProductsFilters={getProductsFilters}
              setFilteredProducts={setFilteredProducts}
              filterId={filterId}
            />
          </Col>
          <Col span={{ base: 12, md: 9 }}>
            <CategoriesAndProducts
              products={filteredProducts}
              categoryId={categoryId}
            />
          </Col>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
export default ProductsPage;
