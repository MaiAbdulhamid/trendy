import React from "react";
import { OrderCard } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import { H4, P4 } from "@/app/[locale]/components/Typography";
import Button from "@/app/[locale]/components/Button/Button";
import { useRouter } from "next/navigation";
import URLS from "@/app/[locale]/utils/urls";

const Order = ({ order }: any) => {
  const router = useRouter();
  return (
    <OrderCard>
      <Flex gap="1rem" direction="column" justify="space-between" fullWidth>
        <H4>{order.order_number}</H4>
        <P4>{order.date}</P4>

        <Button
          color={order.color}
          onClick={() => router.push(URLS.viewOrder(order))}
        >
          {order.status}
        </Button>
      </Flex>
    </OrderCard>
  );
};

export default Order;
