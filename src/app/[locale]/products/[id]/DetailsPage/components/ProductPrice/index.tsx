import Currency from "../../../../../utils/currency";
import { IsExpress, IsFreeShipping, PriceContainer } from "./style";
import theme from "@/app/[locale]/utils/theme";
import { P4 } from "@/app/[locale]/components/Typography";
import { Flex } from "@/app/[locale]/components/Grids";
import { useTranslations } from "next-intl";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import Reviews from "../Reviews";

export default function ProductPrice({ product }: any) {
  const trans = useTranslations("Product");
  return (
    <>
      <PriceContainer>
        <Flex gap="1rem">
          <P4 color={theme.colors.primaryColor}>
            {Currency.format(product.price_after)}
          </P4>
          <P4 color="#AEABA4" textDecoration="line-through">
            {Currency.format(product.price_before)}
          </P4>
        </Flex>
        <Flex gap="0.5rem" align="center" justify="center">
          {product.is_delivery && <P4>{trans("delivery")}</P4>}
          {product.is_express && <IsExpress>{trans("express")}</IsExpress>}
        </Flex>
      </PriceContainer>
      <Reviews rate={product.rate} />
      <Line color="#3434344D" />
    </>
  );
}
