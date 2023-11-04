import { useState } from "react";
import { WishlistButtonStyled } from "./style";
import { WishlistButtonProps } from "./type";
import { HeartIcon } from "../../../assets/svgs";

export default function WishlistButton({
  product,
  ...other
}: WishlistButtonProps) {
  const [loading, isLoading] = useState(false);
  const [inWishlist, setInWishlist] = useState(product.inWishlist);

  // const addToWishlist = () => {

  //   if(!user.isLoggedUser()) {
      
  //     toastError(trans("mustLogin"))

  //     return;
  //   }

  //   isLoading(true);

  //   const service = inWishlist
  //   ? wishlist.delete(product.id)
  //     : wishlist.add(product.id)

  //   service
  //     .then((response) => {
  //       toastSuccess(inWishlist ? trans("successDeleteWishlist") : trans("successAddWishlist"));

  //       setInWishlist(!inWishlist);

  //       isLoading(false);
  //     })
  //     .catch((error) => {
  //       isLoading(false);

  //       toastResponseErrors(error.response.data.errors);
  //     });
  // };

  return (
    <WishlistButtonStyled
      sized="50"
      rounded
      // onClick={addToWishlist}
      variant='primary'
      disabled={loading}
      active={inWishlist}
      {...other}
    >
      <HeartIcon />
    </WishlistButtonStyled>
  );
}
