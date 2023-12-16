"use client";
import { Grid, Space } from "@mantine/core";
import cart from "../../utils/CartManager";
import CartItem from "../CartItem";
import Invoice from "../Invoice";
import { EmptyCartIcon } from "@/app/[locale]/assets/svgs";
import { H2, P1 } from "@/app/[locale]/components/Typography";
import { Col, Container, Flex } from "@/app/[locale]/components/Grids";
import ProductsSlider from "@/app/[locale]/components/ProductsSlider";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import { useTranslations } from "next-intl";
import theme from "@/app/[locale]/utils/theme";
import cache from "@mongez/cache";

export default function CartPage() {
  const trans = useTranslations("Cart");
  // use Hook once
  const cartAtom = cart.atom;
  if (cartAtom.isEmpty) {
    return (
      <>
        <Container>
          <Flex>
            <H2>{trans("cart")}</H2>
            <H2 color={theme.colors.error[300]}>( {trans("noItems")} )</H2>
          </Flex>
          <Flex fullWidth direction="column" justify="center" align="center">
            <EmptyCartIcon />
            <Space h={20} />
            <P1>{trans("emptyCart")}</P1>
          </Flex>
          <Grid>
            <Col>
              <Line />
              <ProductsSlider
                enableViewAllButton={false}
                title={cartAtom?.widget?.title}
                products={cartAtom?.widget?.widgetData}
              />
            </Col>
          </Grid>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Grid>
          <Col>
            <Space h={20} />
            <H2>
              {trans("cart")} ( {cartAtom.items.length} {trans("items")} )
            </H2>
            <Space h={20} />
          </Col>
        </Grid>
        <Grid gutter={20}>
          <Col span={{ base: 12, md: 9 }}>
            {cartAtom.items.map((item: any, index: number) => (
              <CartItem
                key={`item--${index}`}
                lastItem={cartAtom.items.length === index + 1}
                product={item}
                cartItemId={cartAtom.cartItemId}
              />
            ))}
          </Col>
          <Col span={{ base: 12, md: 3 }}>
            <Invoice />
          </Col>
        </Grid>
        <Grid>
          <Col>
            <Line />
            {/* <ProductsSlider
              enableViewAllButton={false}
              title={cache.get('cartWidget')?.title}
              products={cache.get('cartWidget')?.widgetData}
            /> */}
          </Col>
        </Grid>
      </Container>
    </>
  );
}
