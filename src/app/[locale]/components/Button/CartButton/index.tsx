import { useState } from "react";
import { CartButtonStyled } from "./style";
import { CartButtonProps } from "./type";
import { useTranslations } from "next-intl";
import { AddToCartIcon } from "@/app/[locale]/assets/svgs";
import { P4 } from "../../Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "../../Notifications/showNotification";
import { cartItemAtom } from "@/app/[locale]/shared/atoms/cart-atom";
import { useDispatch } from "react-redux";
import { addToCart, cartActions } from "@/app/store/cart.slice";

export default function CartButton({
  product,
  quantity = 1,
  variationId,
  iconSize = 31,
  ...other
}: CartButtonProps) {
  const trans = useTranslations("Cart");
  const [loading, isLoading] = useState(false);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    isLoading(true);
    // const preparedData = {
    //   product_id: product.id,
    //   qty: quantity,
    //   variation_id: variationId,
    // };
    // axiosInstance
    //   .post("cart/AddOrUpdate", preparedData)
    //   .then((response) => {
    //     isLoading(false);
    //     showNotification({
    //       type: "success",
    //       message: response.data.message,
    //     });
    //   })
    //   .catch((error) => {
    //     isLoading(false);

    //     showNotification({
    //       type: "danger",
    //       message: error.response.data.message,
    //     });
    //   });
      dispatch(addToCart(product.id, variationId, quantity) as any);
      isLoading(false);
  };
  return (
    <CartButtonStyled
      variant="primary"
      loading={loading}
      onClick={addToCartHandler}
      {...other}
    >
      <AddToCartIcon size={iconSize} />
      <P4>{trans("addToCart")}</P4>
    </CartButtonStyled>
  );
}
