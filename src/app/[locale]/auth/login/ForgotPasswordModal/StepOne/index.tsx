"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslations } from "next-intl";
import EmailInput from "../../../../components/Form/EmailInput";
import { Flex } from "../../../../components/Grids";
import SubmitButton from "../../../../components/Form/SubmitButton";
import { Form } from "@mongez/react-form";
import Heading from "../../../components/Heading";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { showNotification } from "../../../../components/Notifications/showNotification";
import { authActions } from "@/app/store";

const StepOne = ({ handleNext }: any) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const trans = useTranslations("Auth");

  const onSubmit = async ({ form, values }: any) => {
    setIsSubmitting(form.isSubmitting());
    const response: any = await dispatch(authActions.forgotPassword(values));

    if (response.error) {
      showNotification({
        type: "danger",
        message: response.error.message,
      });
      setIsSubmitting(false);
    } else {
      showNotification({
        type: "success",
        message: response.payload.message,
      });
      setIsSubmitting(false);
      handleNext()
    }
  };
  return (
    <div>
      <Heading title="forgotPassword" subTitle="enterEmail" />
      <Form onSubmit={onSubmit} method="post">
        <Flex direction="column" gap="0.5rem" fullWidth>
          <EmailInput
            name="email"
            label="email"
            placeholder="example@example.com"
            icon
            required
          />
          <SubmitButton isSubmitting={isSubmitting} fullWidth variant="primary">
            {trans("resetPassword")}
          </SubmitButton>
        </Flex>
      </Form>
    </div>
  );
};

export default StepOne;
