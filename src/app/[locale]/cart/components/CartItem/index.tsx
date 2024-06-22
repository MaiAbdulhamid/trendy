"use client";
import { useState } from "react";
import { Format } from "../../../utils/currency";
import { CartItemWrapper, PercentCard, Wrapper } from "./style";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import { Flex } from "@/app/[locale]/components/Grids";
import { H6, P4, Small } from "@/app/[locale]/components/Typography";
import QuantityInput from "@/app/[locale]/components/Form/QuantityInput";
import Button from "@/app/[locale]/components/Button/Button";
import theme from "@/app/[locale]/utils/theme";
import { RemoveIcon } from "@/app/[locale]/assets/svgs";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import { useTranslations } from "next-intl";
import cart from "../../utils/CartManager";
import Is from "@mongez/supportive-is";

export default function CartItem({ product: cartItem, lastItem }: any) {
  const trans = useTranslations("Cart");

  const {
    image,
    price_after,
    price_before,
    discount_percentage,
    id,
    product_id,
    qty: quantityItem,
    variation,
    name,
    delivery_time,
    images,
    variation_id,
    stock,
  } = cartItem;

  const [isLoadingAction, setIsLoadingAction] = useState(false);

  const deleteItem = () => {
    setIsLoadingAction(true);

    cart.delete(id);

    setIsLoadingAction(false);
  };

  const updateProductQuantity = (quantity: any) => {
    setIsLoadingAction(true);
    if (quantity === 0) {
      cart.delete(id);
    } else {
      axiosInstance
        .post("cart/AddOrUpdate", {
          product_id: product_id,
          qty: quantity,
          variation_id,
        })
        .then((response) => {
          setIsLoadingAction(false);
          showNotification({
            type: "success",
            message: response.data.message,
          });
        })
        .catch((error) => {
          setIsLoadingAction(false);

          showNotification({
            type: "danger",
            message: error?.response?.data?.errors,
          });
        });
    }
  };

  return (
    <CartItemWrapper>
      <Wrapper fullWidth gap="20px">
        <div className="product--img">
          <img src={image ?? images} width={170} height={144} alt="product" />
        </div>
        <div className="product--description">
          <Flex
            className="product--price"
            gap="15px"
            justify="space-between"
            fullWidth
            style={{ flexWrap: "wrap" }}
          >
            <Flex direction="column">
              <H6 className="product--name"> {name}</H6>
              {variation && <P4>{variation.name}</P4>}
              {delivery_time && (
                <P4 color={theme.colors.primaryColor}>
                  {trans("deliveryTime")} : {delivery_time}
                </P4>
              )}
            </Flex>
            <Flex direction="column">
              <H6 color={theme.colors.primaryColor}>{Format(price_after)}</H6>
              <Flex align="center" gap="0.5rem">
                {price_before !== 0 ||
                  (!Is.empty(price_before) && (
                    <P4 opacity="0.5" textDecoration="line-through">
                      {Format(price_before)}
                    </P4>
                  ))}
                {discount_percentage && (
                  <PercentCard>{discount_percentage}%</PercentCard>
                )}
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Wrapper>
      <Flex
        fullWidth
        justify="space-between"
        align="center"
        className="product--action"
        gap="15px"
      >
        <Button
          className="delete--button"
          onClick={deleteItem}
          loading={isLoadingAction}
          noStyle
        >
          <Flex align="center">
            <RemoveIcon color={theme.colors.primaryColor} />
            <P4 color={theme.colors.primaryColor}>{trans("remove")}</P4>
          </Flex>
        </Button>

        <QuantityInput
          defaultValue={quantityItem}
          onChange={updateProductQuantity}
          min={0}
          max={stock}
        />
      </Flex>
      {!lastItem && <Line />}
    </CartItemWrapper>
  );
}
