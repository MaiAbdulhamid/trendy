import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Form, HiddenInput } from "@mongez/react-form";
import { H6 } from "@/app/[locale]/components/Typography";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import Modal from "@/app/[locale]/components/Modal";
import { Flex } from "@/app/[locale]/components/Grids";
import SubmitButton from "@/app/[locale]/components/Form/SubmitButton";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";
import TextareaInput from "@/app/[locale]/components/Form/TextareaInput";
import Rating from "@/app/[locale]/components/Rating";

const RateProductModal = ({ productId, orderId, opened, close }: any) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const trans = useTranslations("Auth");

  const onSubmit = async ({ values }: any) => {
    setIsSubmitting(true);
    try {
      const response: any = await axiosInstance.post(
        "order/addOrUpdateRateProduct",
        { ...values }
      );
      showNotification({
        type: "success",
        message: response.data.message,
      });
      close();
      window.location.reload();
    } catch (error: any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Modal opened={opened} close={close} size="md" centered>
        <Flex gap="1rem" direction="column" fullWidth>
          <H6>{trans("rateProduct")}</H6>
          <Line margin="0" />
          <Form onSubmit={onSubmit}>
            <Flex direction="column" gap="1rem" fullWidth>
              <HiddenInput name="product_id" value={productId} />
              <HiddenInput name="order_id" value={orderId} />
              <Rating name="rate" />
              <TextareaInput
                name="comment"
                label={"comment"}
                placeholder={"comment"}
                required
              />
              <SubmitButton
                isSubmitting={isSubmitting}
                fullWidth
                variant="primary"
                type="submit"
              >
                {trans("rate")}
              </SubmitButton>
            </Flex>
          </Form>
        </Flex>
      </Modal>
    </>
  );
};

export default RateProductModal;
