"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Flex } from "../../../../components/Grids";
import SubmitButton from "../../../../components/Form/SubmitButton";
import VerificationInputs from "../VerificationInputs";
import CodeExpired from "../CodeExpired";
import ResendCode from "../ResendCode";
import { useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../../components/Notifications/showNotification";
import { authActions } from "@/app/store";
import Heading from "../../../components/Heading";

const StepTwo = ({ handleNext }: any) => {
  const enteredEmail = useSelector((state: any) => state.forgotPassword?.email);
  // console.log(enteredEmail)

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const trans = useTranslations("Auth");

  const onSubmit = async (code: any) => {
    setIsSubmitting(true);

    const preparedFormData = {
      code,
      email: enteredEmail,
    };

    const response: any = await dispatch(
      authActions.verifyEmail(preparedFormData)
    );
    console.log(response);
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
      handleNext();
    }
  };
  return (
    <>
      <Heading title="verifyTitle" subTitle="verifySubTitle" />

      <form method="post">
        <Flex direction="column" gap="0.5rem" fullWidth>
          <VerificationInputs callback={onSubmit} />
          <CodeExpired />
          <ResendCode />
          <SubmitButton
            fullWidth
            variant="primary"
            isSubmitting={isSubmitting}
            type="button"
          >
            {trans("verify")}
          </SubmitButton>
        </Flex>
      </form>
    </>
  );
};

export default StepTwo;
