import { trans } from "@mongez/localization";
import { useEffect, useState } from "react";
import { ProductQuantityContainer } from "./style";
import QuantityInput from "@/app/[locale]/components/Form/QuantityInput";
import { H7 } from "@/app/[locale]/components/Typography";
import { Flex } from "@/app/[locale]/components/Grids";
import CartButton from "@/app/[locale]/components/Button/CartButton";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import { allVariationsAtom } from "../../atoms";

export default function ProductQuantity({ product, variationId, option }: any) {
  const [quantity, setQuantity] = useState(product.qty || 1);
  const [showCart, setShowCart] = useState(product.qty === 0);

  useEffect(() => {
    if (option) {
      setQuantity(option.qty !== 0 ? option.qty : 1);
      setShowCart(option.qty === 0);
    }
  }, [option]);

  const updateProductQuantity = (quantity: any) => {
    axiosInstance
      .post("cart/AddOrUpdate", {
        product_id: product.id,
        qty: quantity,
        variation_id: variationId,
      })
      .then((response) => {
        allVariationsAtom.update({
          allVariations: response.data.data.main_variations,
        });
        console.log(response.data.data.main_variations);
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

    if (quantity === 0) {
      setShowCart(true);
    }
  };

  return (
    <>
      {showCart ? (
        <>
          <CartButton
            quantity={quantity}
            fullWidth
            size="lg"
            product={product}
            stock={product.stock}
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
              max={option ? option.stock : product.stock}
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
