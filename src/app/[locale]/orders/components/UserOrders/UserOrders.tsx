import { Col, Flex } from "@/app/[locale]/components/Grids";
import ProductCard from "@/app/[locale]/components/ProductCard";
import { H2, P4 } from "@/app/[locale]/components/Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { Grid } from "@mantine/core";
import Is from "@mongez/supportive-is";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Order from "./Order";
import { OrderCard } from "./style";

const UserOrders = () => {
  const trans = useTranslations("Orders");

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axiosInstance.get("order/list");
      setOrders(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <H2>{trans("orders")}</H2>
      {Is.empty(orders) ? (
        <P4 textAlign="center">{trans("noResults")}</P4>
      ) : (
        <OrderCard>
          <Grid>
            {orders.map((order: any) => (
              <Col span={{ base: 12, md: 6 }} key={order.id}>
                <Order order={order} />
              </Col>
            ))}
          </Grid>
        </OrderCard>
      )}
    </>
  );
};

export default UserOrders;
