import { Container, Col } from "@/app/[locale]/components/Grids";
import { H2 } from "@/app/[locale]/components/Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { Grid, Space } from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AddressAndPaymentMethods from "../AddressAndPaymentMethods";
import OrderSummary from "../OrderSummary";
import { Form, HiddenInput, getActiveForm, useForm } from "@mongez/react-form";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import cache from "@mongez/cache";
import { useRouter } from "next/navigation";
import Is from "@mongez/supportive-is";

const CheckoutPage = () => {
  const trans = useTranslations("Checkout");
  const searchParams = useSearchParams();
  const invoiceId = searchParams.get("invoiceId");
  const [checkout, setCheckout] = useState<any>([]);
  const formRef: any = useRef();
  const router = useRouter();
  console.log(invoiceId)
  const getCheckout = async () => {
    try {
      const response: any = await axiosInstance.get("checkout");
      setCheckout(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCheckout();
  }, []);

  const handlePayment = async (values: any) => {
    try {
      const response = await axios.post("/api/myFatoorah", {
        totalAmount: values.totalAmount,
        phoneNumber: values.phoneNumber,
        countryCode: values.countryCode,
        currency: values.currency,
      });

      const { paymentUrl } = response.data;
      // Redirect the user to the payment URL
      window.location.href = paymentUrl;
      // window.open(paymentUrl, '_blank');
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const onSubmit = useCallback(
    async ({ values }: any) => {
      if (values?.payment_method === "1" && !invoiceId) {
        handlePayment(values);
      } else {
        try {
          const response: any = await axiosInstance.post("order/complete", {
            ...values,
          });
          showNotification({
            type: "success",
            message: response.data.message,
          });
        } catch (error: any) {
          if (error.response) {
            showNotification({
              type: "danger",
              message: error.response.data.message,
            });
          }
        }
      }
    },
    [invoiceId]
  );

  useEffect(() => {
    const form = formRef.current;
    if (
      invoiceId &&
      !Is.empty(checkout) &&
      form &&
      !Is.empty(form.value('address_id'))
    ) {
      const formData = {
        ...form.values,
        inovice_id: invoiceId,
      };
      form.submit(formData);
      router.push("/orders");
    }
  }, [invoiceId, checkout]);

  return (
    <Container>
      <Grid>
        <Col>
          <Space h={20} />
          <H2>{trans("checkout")}</H2>
          <Space h={20} />
        </Col>
      </Grid>
      <Form onSubmit={onSubmit} ref={formRef}>
        <Grid gutter={20}>
          <Col span={{ base: 12, md: 8 }}>
            {invoiceId !== undefined && (
              <HiddenInput name="inovice_id" value={invoiceId} />
            )}
            <AddressAndPaymentMethods checkout={checkout} />
          </Col>
          <Col span={{ base: 12, md: 4 }}>
            <OrderSummary orderSummery={checkout.order_summary} />
          </Col>
        </Grid>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
