import { Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import { navigateTo } from "@mongez/react-router";
import { Wrapper } from "./style";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import { H5, P4 } from "@/app/[locale]/components/Typography";
import theme from "@/app/[locale]/utils/theme";
import Currency from "@/app/[locale]/utils/currency";
import Button from "@/app/[locale]/components/Button/Button";
import URLS from "@/app/[locale]/utils/urls";
import cart from "../../utils/CartManager";
import { useTranslations } from "next-intl";
import { Flex } from "@/app/[locale]/components/Grids";
import { useRouter } from "next/navigation";

export default function Invoice() {
  const trans = useTranslations("Cart");
  const router = useRouter();

  const [isLoadingAction, setIsLoadingAction] = useState(false);

  useEffect(() => {
    let event = cart.on("makingAction", (isLoading: boolean) => {
      setIsLoadingAction(isLoading);
    });

    return () => event.unsubscribe();
  }, []);

  const totalPrice = cart.atom.items.reduce(
    (accumulator: number, currentItem: any) =>
      +currentItem.price_after * currentItem.qty + accumulator,
    0
  );

  const navigateToCheckout = () => {
    router.push(URLS.checkout)
  }

  // console.log(totalPrice);
  return (
    <Wrapper>
      <H5>{trans("orderSummary")}</H5>
      <Line />

      <Flex align="center" fullWidth justify="space-between">
        <P4>{trans("totalPrice")}</P4>
        <H5>{Currency.format(totalPrice)} </H5>
      </Flex>

      <Button
        variant="primary"
        fullWidth
        loading={isLoadingAction}
        onClick={navigateToCheckout}
        height="55px"
        className="checkout-button"
      >
        {trans("checkout")}
      </Button>
    </Wrapper>
  );
}
