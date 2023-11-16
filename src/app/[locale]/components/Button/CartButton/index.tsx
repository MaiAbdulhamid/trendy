import { useState } from "react";
import { CartButtonStyled } from "./style";
import { CartButtonProps } from "./type";
import { useTranslations } from "next-intl";
import { AddToCartIcon } from "@/app/[locale]/assets/svgs";
import { P4 } from "../../Typography";

export default function CartButton({
  product,
  quantity = 1,
  options = {},
  iconSize = 31,
  ...other
}: CartButtonProps) {
  const trans = useTranslations('Cart')
  const [loading, isLoading] = useState(false);

  // const addToCart = () => {
  //   isLoading(true);

  //   cart
  //     .add(product.id, Number(quantity), options)
  //     .then((response) => {
  //       isLoading(false);

  //       toastSuccess(trans("successAddToCart", product.name));
  //     })
  //     .catch((error) => {
  //       isLoading(false);

  //       toastResponseErrors(error.response.data.errors);
  //     });
  // };
  return (
    <CartButtonStyled variant="primary" {...other} loading={loading}>
      <AddToCartIcon size={iconSize} />
      <P4>{trans("addToCart")}</P4>
    </CartButtonStyled>
  );
}
