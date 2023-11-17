import { trans } from "@mongez/localization";
import Is from "@mongez/supportive-is";
import { useEffect, useState } from "react";
import Currency from "../../../../../utils/currency";
import { ProductQuantityContainer } from "./style";
import { cartItemAtom } from "@/app/[locale]/shared/atoms/cart-atom";
import QuantityInput from "@/app/[locale]/components/Form/QuantityInput";
import { H7, P1, P3 } from "@/app/[locale]/components/Typography";
import theme from "@/app/[locale]/utils/theme";
import { Flex } from "@/app/[locale]/components/Grids";
import CartButton from "@/app/[locale]/components/Button/CartButton";
import { Line } from "@/app/[locale]/components/shapes/Lines";

export default function ProductQuantity({ product, variationId }: any) {
  const [quantity, setQuantity] = useState(product.qty || 1);

  const onChangeQty = (value: any) => {
    setQuantity(value);
  };

  // if(product.qty === 0 ) return null;

  return (
    <>
      <ProductQuantityContainer>
        <H7>{trans("quantity")}</H7>
        <Flex justify="space-between" fullWidth>
          <QuantityInput
            min={product.qty}
            max={product.stock}
            onChange={onChangeQty}
            defaultValue={quantity}
          />
        </Flex>
      </ProductQuantityContainer>
      <Line color="#3434344D" />
      <CartButton
        quantity={quantity}
        fullWidth
        size="lg"
        product={product}
        variationId={variationId}
        className="add--to--cart"
      />
      <Line color="#3434344D" />

    </>
  );
}
