import Button from "@/app/[locale]/components/Button/Button";
import { Col, Flex } from "@/app/[locale]/components/Grids";
import { H4, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import { Card, Padding, Wrapper } from "./style";
import { useRouter } from "next/navigation";
import URLS from "@/app/[locale]/utils/urls";
import { HomeIcon } from "@/app/[locale]/assets/svgs";
import Address from "./Address";
import OrderStatus from "./OrderStatus";
import { Grid } from "@mantine/core";
import OrderDetails from "./OrderDetails";

const Details = ({ order }: any) => {
  const trans = useTranslations("Orders");

  return (
    <Wrapper>
      <Padding>
        <H4>{order.order_number}</H4>
        <P4>{trans('on')} {order.date}</P4>
      </Padding>
      <Address address={order.shipping_address} />
      <Card>
        <Grid>
          <Col span={{base: "12", md: "8"}}>
            <OrderDetails order={order} />
          </Col>
          <Col span={{base: "12", md: "4"}}>
            <OrderStatus />
          </Col>
        </Grid>
      </Card>
    </Wrapper>
  );
};

export default Details;
