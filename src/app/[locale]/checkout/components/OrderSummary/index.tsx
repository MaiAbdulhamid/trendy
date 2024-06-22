import React, { useCallback, useEffect, useState, useMemo } from "react";
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
import cache from "@mongez/cache";

const OrderSummary = ({ orderSummery }: any) => {
  const trans = useTranslations("Checkout");
  const [promoCode, setPromoCode] = useState(() => cache.get("promoCode") || "");
  const [promoCodeApplied, setPromoCodeApplied] = useState(!!cache.get("promoCode"));
  const [summary, setSummary] = useState(orderSummery);

  const fetchPromoCode = useCallback(() => {
    return cache.get("promoCode");
  }, []);

  useEffect(() => {
    setPromoCode(fetchPromoCode());
    setPromoCodeApplied(!!fetchPromoCode());
  }, [fetchPromoCode]);

  useEffect(() => {
    setSummary(orderSummery);
  }, [orderSummery]);

  const applyPromoCode = useCallback(async () => {
    setPromoCodeApplied(true);
    try {
      const response: any = await axiosInstance.post("promo/apply", {
        promo_code: promoCode,
      });
      setSummary(response.data.data.order_summary);
      showNotification({
        message: response.data.message,
      });
      cache.set("promoCode", promoCode);
    } catch (error: any) {
      showNotification({
        type: "danger",
        message: error.response?.data?.message || trans("somethingWentWrong"),
      });
    }
  }, [promoCode, trans]);

  const removePromoCode = useCallback(async () => {
    setPromoCode("");
    setPromoCodeApplied(false);

    try {
      const response: any = await axiosInstance.post("promo/apply", {
        promo_code: "",
      });

      setSummary(response.data.data.order_summary);

      showNotification({
        message: response.data.message,
      });
      cache.remove("promoCode");
    } catch (error: any) {
      showNotification({
        type: "danger",
        message: error.response?.data?.message || trans("somethingWentWrong"),
      });
    }
  }, [trans]);

  const renderedSummary = useMemo(() => {
    return summary?.map((summaryItem: any, index: number) => (
      <React.Fragment key={summaryItem.id}>
        <Flex justify="space-between" fullWidth>
          <P4 color={summaryItem.color_code}>{summaryItem.title}</P4>
          <P4 color={summaryItem.color_code}>{summaryItem.value}</P4>
        </Flex>
        {index === summary.length - 2 && <Line />}
      </React.Fragment>
    ));
  }, [summary]);

  return (
    <Wrapper>
      <PromoCodeWrapper>
        <PromoCode
          placeholder={trans("promoCode")}
          onInput={(e: any) => setPromoCode(e.target.value)}
          value={promoCode}
          required
        />
        {!promoCodeApplied ? (
          <Button onClick={applyPromoCode} variant="primary">
            <P4>{trans("apply")}</P4>
          </Button>
        ) : (
          <Button onClick={removePromoCode} variant="primary">
            <P4>{trans("remove")}</P4>
          </Button>
        )}
      </PromoCodeWrapper>
      <OrderSummaryWrapper>
        <H6>{trans("orderSummary")}</H6>
        {renderedSummary}
        <SubmitButton>
          <P4>{trans("placeOrder")}</P4>
        </SubmitButton>
      </OrderSummaryWrapper>
    </Wrapper>
  );
};

export default OrderSummary;
