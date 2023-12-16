import { Container } from '@/app/[locale]/components/Grids'
import Banner from '@/app/[locale]/home/modules/Banner';
import Brands from '@/app/[locale]/home/modules/Brands';
import Categories from '@/app/[locale]/home/modules/Categories';
import NewDeals from '@/app/[locale]/home/modules/NewDeals';
import Products from '@/app/[locale]/home/modules/Products';
import SpecialDeals from '@/app/[locale]/home/modules/SpecialDeals';
import axiosInstance from '@/app/[locale]/lib/axios';
import React, { useEffect, useState } from 'react'

const DealsPage = () => {
  const [deals, setDeals] = useState<any>([]);

  const getDeals = async () => {
    try {
      const response: any = await axiosInstance.get(
        "deals"
      );
      setDeals(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDeals();
  }, []);
  const modules = deals.map((module: any) => {
    switch (module.type) {
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
      default:
        break;
    }
  });
  return (
    <Container>
      {modules}
    </Container>
  )
}

export default DealsPage