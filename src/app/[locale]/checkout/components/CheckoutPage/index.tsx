import { Container, Col } from "@/app/[locale]/components/Grids";
import { H2 } from "@/app/[locale]/components/Typography";
import axiosInstance from "@/app/[locale]/lib/axios";
import { Grid, Space } from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AddressAndPaymentMethods from "../AddressAndPaymentMethods";
import OrderSummary from "../OrderSummary";
import { Form, HiddenInput, useForm } from "@mongez/react-form";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Is from "@mongez/supportive-is";
import Loader from "@/app/[locale]/components/Loader";

const CheckoutPage = () => {
  const trans = useTranslations("Checkout");
  const searchParams = useSearchParams();
  const invoiceId = searchParams.get("invoiceId");
  const [checkout, setCheckout] = useState<any>([]);
  const formRef = useRef<any>(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm();

  const getCheckout = useCallback(async () => {
    try {
      const response: any = await axiosInstance.get("checkout");
      setCheckout(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCheckout();
  }, [getCheckout]);

  const handlePayment = useCallback(async (values: any) => {
    try {
      const response = await axios.post("/api/myFatoorah", {
        totalAmount: values.totalAmount,
        phoneNumber: values.phoneNumber,
        countryCode: values.countryCode,
        currency: values.currency,
        customerName: values.customerName,
      });

      const { paymentUrl } = response.data;
      window.location.href = paymentUrl;
    } catch (error: any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    }
  }, []);

  const sendOrder = useCallback(async (values: any) => {
    try {
      const response: any = await axiosInstance.post("order/complete", values);
      showNotification({
        type: "success",
        message: response.data.message,
      });
      router.push("/success-page");
    } catch (error: any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    }
  }, []);

  const onSubmit = useCallback(
    async ({ values }: any) => {
      if (isSubmitting) return; // Prevent multiple submissions
      setIsSubmitting(true);

      try {
        if (values?.payment_method === "1" && !invoiceId) {
          await handlePayment(values);
        } else {
          await sendOrder(values);
        }
        setIsSubmitting(false);
      } catch (error: any) {
        if (error.response) {
          showNotification({
            type: "danger",
            message: error.response.data.message,
          });
        }
        setIsSubmitting(false);
      }
    },
    [invoiceId, isSubmitting, handlePayment, router]
  );

  useEffect(() => {
    if (!Is.empty(checkout) && invoiceId) {
      const formData = {
        payment_method: "1",
        invoice_id: invoiceId,
        address_id: checkout.address.id,
      };
      sendOrder(formData);
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
              <HiddenInput name="invoice_id" value={invoiceId} />
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
