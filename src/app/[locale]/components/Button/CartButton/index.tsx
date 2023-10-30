import { useState } from "react";
import { CartButtonStyled } from "./style";
import { CartButtonProps } from "./type";
import { useTranslations } from "next-intl";

export default function CartButton({
  product,
  quantity = 1,
  options = {},
  iconSize= 19,
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
    <CartButtonStyled {...other} loading={loading}>
      {/* <CartIcon color={theme.colors.white} size={iconSize} /> */}
      {trans("addToCart")}
    </CartButtonStyled>
  );
}
