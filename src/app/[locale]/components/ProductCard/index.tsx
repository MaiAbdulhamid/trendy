import { P3, P4 } from "../Typography";
import {
  CaptionBox,
  ImageBox,
  IsDiscount,
  IsExpress,
  IsFreeShipping,
  Options,
  ProductBox,
  ProductWishlistButton,
  StyledCartButton,
} from "./style";
import { ProductCardProps } from "./type";
import { resolveLink, trimmed } from "../../utils/general";
import theme from "../../utils/theme";
import Currency from "../../utils/currency";
import { Flex } from "../Grids";
import { useState } from "react";
import Link from "next/link";

export default function ProductCard(props: ProductCardProps) {
  const [style, setStyle] = useState({ display: "none" });
  const { product, color } = props;
  return (
    <ProductBox>
      <Options>
        <Flex direction="column" gap="0.5rem" align="end">
          {product.is_express && <IsExpress>Express</IsExpress>}
          {product.discount_percentage && (
            <IsDiscount>{product.discount_percentage}% Off</IsDiscount>
          )}
          {product.is_delivery && (
            <IsFreeShipping>Free Shipping</IsFreeShipping>
          )}
        </Flex>
      </Options>
      <ImageBox
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <ProductWishlistButton style={style} product={product} />
        <img src={product?.image} className="img-responsive" />
        <StyledCartButton
          product={product}
          size="md"
          variant="primary"
          fullWidth
          style={style}
        />
      </ImageBox>
      <Link href={resolveLink(product)}>
        <CaptionBox>
          <P3 color={color ?? theme.colors.black[300]}>
            {trimmed(product.name, 20)}
          </P3>
          <Flex gap="1rem" fullWidth>
            <P4 color={theme.colors.primaryColor}>
              {Currency.format(product.price_after)}
            </P4>
            <P4 color="#AEABA4" textDecoration="line-through">
              {Currency.format(product.price_before)}
            </P4>
          </Flex>
        </CaptionBox>
      </Link>
    </ProductBox>
  );
}
