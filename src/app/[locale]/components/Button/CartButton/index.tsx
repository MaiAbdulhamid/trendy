import { useState } from "react";
import { CartButtonStyled } from "./style";
import { CartButtonProps } from "./type";
import { useTranslations } from "next-intl";
import { AddToCartIcon } from "@/app/[locale]/assets/svgs";
import { P4 } from "../../Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "../../Notifications/showNotification";
import cart from "@/app/[locale]/cart/utils/CartManager";

export default function CartButton({
  product,
  quantity = 1,
  variationId,
  iconSize = 31,
  setShowCart,
  ...other
}: CartButtonProps) {
  const trans = useTranslations("Cart");
  const [loading, setLoading] = useState(false);

  const addToCartHandler = async () => {
    if (loading) return; // Prevent multiple submissions
    setLoading(true);

    const preparedData = {
      product_id: product.redirect_id || product.id,
      qty: quantity,
      variation_id: variationId,
    };

    try {
      const response = await axiosInstance.post(
        "cart/AddOrUpdate",
        preparedData
      );
      showNotification({
        type: "success",
        message: response.data.message,
      });
      cart.add(product.redirect_id || product.id, quantity, variationId);
      if (setShowCart) setShowCart(false);
    } catch (error: any) {
      showNotification({
        type: "danger",
        message: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartButtonStyled
      variant="primary"
      loading={loading}
      onClick={addToCartHandler}
      disabled={loading || other.stock === 0} // Disable button if loading or out of stock
      {...other}
    >
      <AddToCartIcon size={iconSize} />
      <P4>{trans("addToCart")}</P4>
    </CartButtonStyled>
  );
}
