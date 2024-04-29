import React, { useState } from "react";
import {
  OrderSummaryWrapper,
  PromoCode,
  PromoCodeWrapper,
  Wrapper,
} from "./style";
import Button from "@/app/[locale]/components/Button/Button";
import { H6, P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import { Flex } from "@/app/[locale]/components/Grids";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import SubmitButton from "@/app/[locale]/components/Form/SubmitButton";

const OrderSummary = ({ orderSummary }: any) => {
  const trans = useTranslations("Checkout");

  return (
    <Wrapper>
      <OrderSummaryWrapper>
        <H6>{trans("orderSummary")}</H6>
        {orderSummary?.map((summary: any, index: number) => (
          <>
            <Flex key={summary.id} justify="space-between" fullWidth>
              <P4 color={summary.color_code}>{summary.title}</P4>
              <P4 color={summary.color_code}>{summary.value}</P4>
            </Flex>
            {index === orderSummary.length - 2 && <Line />}
          </>
        ))}
      </OrderSummaryWrapper>
    </Wrapper>
  );
};

export default OrderSummary;
