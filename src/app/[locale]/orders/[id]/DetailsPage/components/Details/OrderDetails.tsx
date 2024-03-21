import React from "react";
import { Card, OrderImage, Padding } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import Button from "@/app/[locale]/components/Button/Button";
import { H5, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import { Format } from "@/app/[locale]/utils/currency";
import theme from "@/app/[locale]/utils/theme";
import Is from "@mongez/supportive-is";
import { useDisclosure } from "@mantine/hooks";
import RateProductModal from "./RateProductModal";
import UserRate from "./UserRate";

const OrderDetails = ({ order }: any) => {
  const trans = useTranslations("Orders");
  const [
    openedRateProduct,
    { open: openRateProduct, close: closeRateProduct },
  ] = useDisclosure(false);
  return (
    <Card>
      <Flex justify="space-between" fullWidth align="center">
        <Button color="#DEB156">
          <P4>{order.status}</P4>
        </Button>
        <P4>
          {trans("on")} {order.date}
        </P4>
      </Flex>
      {order.products.map((product: any) => (
        <Padding key={product.id}>
          <Flex gap="1rem">
            <OrderImage>
              <img src={product.image} />
            </OrderImage>
            <Flex direction="column">
              <P4>{product.name}</P4>
              <P4 color={theme.colors.primaryColor}>
                {Format(product.price_after)}
              </P4>
              <Flex fullWidth justify="space-between" align="center">
                <H5>
                  {!Is.empty(product.discount_percentage) &&
                    `${product.discount_percentage}% ${trans("off")}`}
                </H5>
                <P4>{product.variation.name}</P4>
              </Flex>
              {product.can_rate && Is.empty(product.rate) ? (
                <Button noStyle onClick={openRateProduct}>
                  <P4 color="#DEB156">{trans("rateProduct")}</P4>
                </Button>
              ) : <UserRate value={product.rate} />}
            </Flex>
          </Flex>
          <RateProductModal
            productId={product.product_id}
            orderId={order.id}
            opened={openedRateProduct}
            close={closeRateProduct}
          />
        </Padding>
      ))}
    </Card>
  );
};

export default OrderDetails;
