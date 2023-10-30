"use client";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axiosInstance from "../lib/axios";
import Banner from "./modules/Banner";
import Categories from "./modules/Categories";
import "swiper/css";
import SlideShow from "./modules/SlideShow";
import Products from "./modules/Products";
import Promo from "./modules/Promo";
import Brands from "./modules/Brands";

const HomePage = () => {
  const [homeData, setHomeData] = useState<any>([]);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const fetchHomeData = async () => {
    setIsPageLoading(true);
    try {
      const response: any = await axiosInstance.get("home");
      setHomeData(response.data.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, [setHomeData]);

  const modules = homeData.map((module: any) => {
    switch (module.type) {
      case 2:
        return <SlideShow record={module.widgetData} />;
      case 3:
        return <Categories record={module.widgetData} title={module.title} />;
      case 4:
        return (
          <Products
            record={module.widgetData}
            title={module.title}
            widgetId={module.id}
          />
        );
      case 5:
        return <Banner record={module.widgetData} title={module.title} />;
      case 6:
          return <Brands record={module.widgetData} title={module.title} />;
      default:
        break;
    }
  });
  console.log(homeData);
  if (!isPageLoading) return <Loader />;

  return (
    <>
      <Promo />
      {modules}
    </>
  );
};

export default HomePage;
