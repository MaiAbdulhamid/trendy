import { Format } from "../../../../../utils/currency";
import { IsExpress, IsFreeShipping, PriceContainer } from "./style";
import theme from "@/app/[locale]/utils/theme";
import { P4 } from "@/app/[locale]/components/Typography";
import { Flex } from "@/app/[locale]/components/Grids";
import { useTranslations } from "next-intl";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import Reviews from "../Reviews";
import Is from "@mongez/supportive-is";

export default function ProductPrice({ product }: any) {
  const trans = useTranslations("Product");
  return (
    <>
      <PriceContainer>
        <Flex gap="1rem">
          <P4 color={theme.colors.primaryColor}>
            {Format(product.price_after)}
          </P4>
          {product.price_before !== 0 ||
            (!Is.empty(product.price_before) && (
              <P4 color="#AEABA4" textDecoration="line-through">
                {Format(product.price_before)}
              </P4>
            ))}
        </Flex>
        <Flex gap="0.5rem" align="center" justify="center">
          {product.is_delivery && <P4>{trans("delivery")}</P4>}
          {product.is_express && <IsExpress>{trans("express")}</IsExpress>}
        </Flex>
      </PriceContainer>
      {product.delivery_time && (
        <P4>
          {trans("deliveryTime")} : {product.delivery_time}
        </P4>
      )}
      <Reviews rate={product.rate} product={product} />
      <Line color="#3434344D" />
    </>
  );
}
