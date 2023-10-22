import Button from "../../../components/Button/Button";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import theme from "../../../utils/theme";
import { Flex } from "../../../components/Grids";
import { P4 } from "../../../components/Typography";
import { authActions } from "@/app/store";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { showNotification } from "../../../components/Notifications/showNotification";
import Loader from "../../../components/Loader";

const ResendCode = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const email = JSON.parse(localStorage.getItem("email") as any);
  const trans = useTranslations("Auth");

  const resendCodeHandler = async () => {
    const response: any = await dispatch(authActions.forgotPassword({ email }));
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
    }
  };
  if (isSubmitting) return <Loader />;
  return (
    <Flex gap="0.5rem" justify="center" fullWidth align="center">
      <P4 textAlign="center" weight="100">
        {trans("notReceivedCode")}
      </P4>
      <P4>
        <Button
          noStyle
          color={theme.colors.primaryColor}
          type="button"
          onClick={resendCodeHandler}
        >
          {trans("resendCode")}
        </Button>
      </P4>
    </Flex>
  );
};

export default ResendCode;
