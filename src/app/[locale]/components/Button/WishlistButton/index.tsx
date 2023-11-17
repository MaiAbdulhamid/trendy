import { useState } from "react";
import { WishlistButtonStyled } from "./style";
import { WishlistButtonProps } from "./type";
import { HeartIcon } from "../../../assets/svgs";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "../../Notifications/showNotification";
import { getCookie } from "cookies-next";
import { useTranslations } from "next-intl";

export default function WishlistButton({
  product,
  ...other
}: WishlistButtonProps) {
  const [loading, isLoading] = useState(false);
  const [inWishlist, setInWishlist] = useState(product.inWishlist);
  const trans = useTranslations('Product');

  const addOrRemoveWishlist = () => {

    if(!getCookie('token')) {
      
      showNotification({
        type: "danger",
        message: trans("mustLogin"),
      });
      return;
    }

    isLoading(true);

    axiosInstance.post("wishlist/add_or_remove", {product_id: product.id})
     .then((response) => {
        isLoading(false);
        showNotification({
          type: "success",
          message: response.data.message,
        });
      })
      .catch((error) => {
        isLoading(false);

        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      });
  };

  return (
    <WishlistButtonStyled
      sized="50"
      rounded
      onClick={addOrRemoveWishlist}
      variant='primary'
      noStyle
      disabled={loading}
      active={inWishlist}
      {...other}
    >
      <HeartIcon />
    </WishlistButtonStyled>
  );
}
