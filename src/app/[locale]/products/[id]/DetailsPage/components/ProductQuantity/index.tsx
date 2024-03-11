import { trans } from "@mongez/localization";
import Is from "@mongez/supportive-is";
import { useEffect, useState } from "react";
import { ProductQuantityContainer } from "./style";
import { cartItemAtom } from "@/app/[locale]/shared/atoms/cart-atom";
import QuantityInput from "@/app/[locale]/components/Form/QuantityInput";
import { H7, P1, P3 } from "@/app/[locale]/components/Typography";
import theme from "@/app/[locale]/utils/theme";
import { Flex } from "@/app/[locale]/components/Grids";
import CartButton from "@/app/[locale]/components/Button/CartButton";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";

export default function ProductQuantity({ product, variationId }: any) {
  const [quantity, setQuantity] = useState(product.qty || 1);
  const [showCart, setShowCart] = useState(product.qty === 0);

  // const onChangeQty = (value: any) => {
  //   setQuantity(value);
  // };
  const updateProductQuantity = (quantity: any) => {
    axiosInstance
      .post("cart/AddOrUpdate", {
        product_id: product.id,
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
      if(quantity === 0){
        setShowCart(true)
      }
  };
  // if(product.qty === 0 ) return null;

  return (
    <>
      {showCart ? (
        <>
          <CartButton
            quantity={quantity}
            fullWidth
            size="lg"
            product={product}
            variationId={variationId}
            className="add--to--cart"
            setShowCart={setShowCart}
          />
          <Line color="#3434344D" />
        </>
      ) : (
        <ProductQuantityContainer>
          <H7>{trans("quantity")}</H7>
          <Flex justify="space-between" fullWidth>
            <QuantityInput
              min={0}
              max={product.stock}
              onChange={updateProductQuantity}
              defaultValue={quantity}
              setShowCart={setShowCart}
            />
          </Flex>
          <Line color="#3434344D" />
        </ProductQuantityContainer>
      )}
    </>
  );
}
