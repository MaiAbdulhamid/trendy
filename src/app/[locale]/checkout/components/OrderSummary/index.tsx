import React, { useState } from "react";
import {
  OrderSummaryWrapper,
  PromoCode,
  PromoCodeWrapper,
  Wrapper,
} from "./style";
import Button from "@/app/[locale]/components/Button/Button";
import { H3, H6, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import { Form } from "@mongez/react-form";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import Is from "@mongez/supportive-is";
import { Flex } from "@/app/[locale]/components/Grids";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import SubmitButton from "@/app/[locale]/components/Form/SubmitButton";

const OrderSummary = ({ orderSummery }: any) => {
  const trans = useTranslations("Checkout");
  const [promoCode, setPromoCode] = useState("");

  const applyPromoCode = async () => {
    try {
      const response: any = await axiosInstance.post("promo/apply", {
        promo_code: promoCode,
      });
      console.log(response);
      showNotification({
        message: response.data.data.message,
      });
    } catch (error: any) {
      showNotification({
        type: "danger",
        message: error.response.data.message,
      });
    }
  };
  const removePromoCode = () => {
    setPromoCode("");
  };
  return (
    <Wrapper>
      <PromoCodeWrapper>
        <PromoCode
          placeholder={trans("promoCode")}
          onInput={(e: any) => setPromoCode(e.target.value)}
          value={promoCode}
          required
        />
        <Button onClick={applyPromoCode}>
          <P4>{trans("apply")}</P4>
        </Button>
        {/* {Is.empty(promoCode) ? (
          <Button onClick={applyPromoCode}>
            <P4>{trans("apply")}</P4>
          </Button>
        ) : (
          <Button onClick={removePromoCode}>
            <P4>{trans("remove")}</P4>
          </Button>
        )} */}
      </PromoCodeWrapper>
      <OrderSummaryWrapper>
        <H6>{trans("orderSummary")}</H6>

        {orderSummery?.map((summary: any, index: number) => (
          <>
            <Flex key={summary.id} justify="space-between" fullWidth>
              <P4 color={summary.color_code}>{summary.title}</P4>
              <P4 color={summary.color_code}>{summary.value}</P4>
            </Flex>
            {index === orderSummery.length - 2 && <Line />}
          </>
        ))}
        <SubmitButton>
          <P4>{trans("placeOrder")}</P4>
        </SubmitButton>
      </OrderSummaryWrapper>
    </Wrapper>
  );
};

export default OrderSummary;
