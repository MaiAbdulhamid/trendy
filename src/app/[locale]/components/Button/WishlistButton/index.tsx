import { useEffect, useState } from "react";
import { WishlistButtonStyled } from "./style";
import { WishlistButtonProps } from "./type";
import { HeartIcon } from "../../../assets/svgs";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "../../Notifications/showNotification";
import { useTranslations } from "next-intl";
import HeartFillIcon from "@/app/[locale]/assets/svgs/HeartFillIcon";
import cache from "@mongez/cache";

export default function WishlistButton({
  product,
  ...other
}: WishlistButtonProps) {
  const [loading, isLoading] = useState(false);
  const [inWishlist, setInWishlist] = useState(product.is_favorite);
  const trans = useTranslations('Product');
  useEffect(() => {
    setInWishlist(product.is_favorite)
  }, [])
  const addOrRemoveWishlist = () => {

    if(!cache.get('token')) {
      
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
        // setInWishlist(true)
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
      // active={inWishlist}
      {...other}
    >
      {inWishlist ? <HeartFillIcon /> : <HeartIcon />}
    </WishlistButtonStyled>
  );
}
