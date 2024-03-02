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
import { Format } from "../../utils/currency";
import { Flex } from "../Grids";
import { useState } from "react";
import Link from "next/link";
import axiosInstance from "../../lib/axios";
import { showNotification } from "../Notifications/showNotification";
import QuantityInput from "../Form/QuantityInput";

export default function ProductCard(props: ProductCardProps) {
  const [style, setStyle] = useState({ display: "none" });
  const { product, color } = props;
  console.log(product)
  const updateProductQuantity = (quantity: any) => {
    axiosInstance
      .post("cart/AddOrUpdate", {
        product_id: product.redirect_id,
        qty: quantity,
      })
      .then((response) => {
        showNotification({
          type: "success",
          message: response.data.message,
        });
      })
      .catch((error) => {
        showNotification({
          type: "danger",
          message: error.response.data.errors,
        });
      });
  };
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
        <Link href={resolveLink(product)}>
          <img src={product?.image} className="img-responsive" />
        </Link>
        {product.qty === 0 ? (
          <StyledCartButton
            product={product}
            size="md"
            variant="primary"
            fullWidth
            style={style}
          />
        ) : (
          <QuantityInput
            defaultValue={product.qty}
            onChange={updateProductQuantity}
            min={1}
          />
        )}
      </ImageBox>
      <Link href={resolveLink(product)}>
        <CaptionBox>
          <P3 color={color ?? theme.colors.black[300]}>
            {trimmed(product.name, 20)}
          </P3>
          <Flex gap="1rem" fullWidth>
            <P4 color={theme.colors.primaryColor}>
              {Format(product.price_after)}
            </P4>
            <P4 color="#AEABA4" textDecoration="line-through">
              {Format(product.price_before)}
            </P4>
          </Flex>
        </CaptionBox>
      </Link>
    </ProductBox>
  );
}
