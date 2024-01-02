import { Container, Col } from "@/app/[locale]/components/Grids";
import { H2 } from "@/app/[locale]/components/Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { Grid, Space } from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import AddressAndPaymentMethods from "../AddressAndPaymentMethods";
import OrderSummary from "../OrderSummary";

const CheckoutPage = () => {
  const trans = useTranslations("Checkout");

  const [checkout, setCheckout] = useState<any>([]);
  const getCheckout = async () => {
    try {
      const response: any = await axiosInstance.get("checkout");
      setCheckout(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCheckout();
  }, []);

  return (
    <Container>
      <Grid>
        <Col>
          <Space h={20} />
          <H2>{trans("checkout")}</H2>
          <Space h={20} />
        </Col>
      </Grid>
      
      <Grid gutter={20}>
        <Col span={{ base: 12, md: 8 }}>
          <AddressAndPaymentMethods checkout={checkout} />
        </Col>
        <Col span={{ base: 12, md: 4 }}>
          <OrderSummary orderSummery={checkout.order_summary} />
        </Col>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
