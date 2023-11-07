"use client";
import Footer from "../components/Footer";
import { Col, Container } from "../components/Grids";
import { Grid } from "@mantine/core";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import CategoriesAndProducts from "./components/CategoriesAndProducts";
import Filters from "./components/Filters";
import { productsActions } from "../../store/products.slice";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../lib/axios";

function ProductsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const fetchProducts = async () => {
    try {
      const response: any = await axiosInstance.get("products");
      const data = response.data.data.data;
      setFilteredProducts(data);
      dispatch(productsActions.getProducts() as any)
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsPageLoading(false);
    // fetchProducts();
    dispatch(productsActions.getProducts() as any)

  }, [isPageLoading]);

  if (isPageLoading) return <Loader />;

  return (
    <>
      <Header />
      <Container>
        <Grid>
          <Col span={3}>
            <Filters />
          </Col>
          <Col span={9}>
            <CategoriesAndProducts products={products} />
          </Col>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
export default ProductsPage;
