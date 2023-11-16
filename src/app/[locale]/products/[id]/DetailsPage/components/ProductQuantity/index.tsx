import { trans } from "@mongez/localization";
import Is from "@mongez/supportive-is";
import { useEffect, useState } from "react";
import Currency from "../../../../../utils/currency";
import { ProductQuantityContainer } from "./style";
import { cartItemAtom } from "@/app/[locale]/shared/atoms/cart-atom";
import QuantityInput from "@/app/[locale]/components/Form/QuantityInput";
import { P1, P3 } from "@/app/[locale]/components/Typography";
import theme from "@/app/[locale]/utils/theme";
import { Flex } from "@/app/[locale]/components/Grids";
import CartButton from "@/app/[locale]/components/Button/CartButton";
import { Line } from "@/app/[locale]/components/shapes/Lines";

export default function ProductQuantity({ product }: any) {
  const [finalPrice, setFinalPrice] = useState(product.finalPrice);

  const [optionsPriceTotal, setOptionsPriceTotal] = useState(0);

  const [quantity, setQuantity] = useState(product.qty || 1);

  const optionsPrices = cartItemAtom.useValue().optionsPrices || {};

  useEffect(() => {
    let optionsPrice = 0;

    for (var key of Object.keys(optionsPrices)) {
      if (Is.array(optionsPrices[key])) {
        optionsPrice += optionsPrices[key].reduce((a: any, b: any) => a + b, 0);
      } else {
        optionsPrice += optionsPrices[key];
      }
    }

    setOptionsPriceTotal(optionsPrice);

    setFinalPrice(quantity * (product.finalPrice + optionsPrice));
  }, [optionsPrices]);

  const onChangeQty = (value: any) => {
    setQuantity(value);

    setFinalPrice(Number(value) * (product.finalPrice + optionsPriceTotal));
  };

  return (
    <>
      <ProductQuantityContainer>
        <P3>{trans("Quantity")}</P3>
        <Flex justify="space-between" fullWidth>
          <QuantityInput
            min={product.minimumPurchaseQuantity}
            max={product.quantity}
            onChange={onChangeQty}
            defaultValue={quantity}
          />
        </Flex>
      </ProductQuantityContainer>
      <CartButton
        quantity={quantity}
        fullWidth
        size="lg"
        product={product}
        options={cartItemAtom.useValue().options}
        className="add--to--cart"
      />
      <Line color="#3434344D" />

    </>
  );
}
