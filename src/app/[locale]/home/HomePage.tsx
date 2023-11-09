"use client";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axiosInstance from "../lib/axios";
import Banner from "./modules/Banner";
import Categories from "./modules/Categories";
import SlideShow from "./modules/SlideShow";
import Products from "./modules/Products";
import Promo from "./modules/Promo";
import Brands from "./modules/Brands";
import NewDeals from "./modules/NewDeals";
import SpecialDeals from "./modules/SpecialDeals";
import Popup from "./modules/Popup";
import { useDisclosure } from "@mantine/hooks";

const HomePage = () => {
  const [homeData, setHomeData] = useState<any>([]);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [openedPopup, { open: openPopup, close: closePopup }] =
    useDisclosure(false);

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
    openPopup()
    fetchHomeData();
  }, [setHomeData]);

  const modules = homeData.map((module: any) => {
    switch (module.type) {
      case 2:
        return <SlideShow key={module.id} record={module.widgetData} />;
      case 3:
        return (
          <Categories
            key={module.id}
            record={module.widgetData}
            title={module.title}
          />
        );
      case 4:
        return (
          <Products
            key={module.id}
            record={module.widgetData}
            title={module.title}
            widgetId={module.id}
          />
        );
      case 5:
        return (
          <Banner
            key={module.id}
            record={module.widgetData}
            title={module.title}
          />
        );
      case 6:
        return (
          <Brands
            key={module.id}
            record={module.widgetData}
            title={module.title}
          />
        );
      case 7:
        return (
          <NewDeals
            key={module.id}
            discount={module.discount}
            name={module.name}
            record={module.widgetData}
            title={module.title}
            widgetId={module.id}
          />
        );
      case 8:
        return (
          <SpecialDeals
            key={module.id}
            discount={module.discount}
            name={module.name}
            record={module.widgetData}
            title={module.title}
            widgetId={module.id}
          />
        );
      case 9:
        return (
          <Popup
            opened={openedPopup}
            close={closePopup}
            record={module.widgetData}
          />
        );
      default:
        break;
    }
  });
  
  if (!isPageLoading) return <Loader />;

  return (
    <>
      <Promo />
      {modules}
    </>
  );
};

export default HomePage;
