import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import axiosInstance from "../../lib/axios";
import Products from "./Products";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

const CategoriesAndProducts = ({ products } : any) => {
  const [categories, setCategories] = useState<any>([]);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  console.log(`products`, products)
  // const [filteredProducts, setFilteredProducts] = useState<any>([]);
  // const products = useSelector((state: any) => state.products.products);
  const searchParams = useSearchParams()
  // console.log(searchParams.getAll(''));
  // console.log(productsRedux);

  // const fetchProducts = async () => {
  //   try {
  //     const response: any = await axiosInstance.get("products");
  //     const data = response.data.data.data;
  //     setFilteredProducts(data);
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // };

  const fetchCategories = async () => {
    try {
      const response: any = await axiosInstance.get("categories");
      const data = response.data.data.data;
      let subCategories : any = [];

      for(let d of data){
        for(let s of d.section){
          for(let sub of s.sub_categories){
            subCategories.push(sub)
          }
        }
      }
      setCategories(subCategories);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    // fetchProducts()
    setFilteredProducts(products)
  }, []);

  return (
    <>
      <Categories record={categories} />
      <Products record={products} />
    </>
  );
};

export default CategoriesAndProducts;
