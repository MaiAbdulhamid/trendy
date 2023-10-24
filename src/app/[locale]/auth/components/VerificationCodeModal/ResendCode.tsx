import Button from "../../../components/Button/Button";
import { useTranslations } from "next-intl";
import React from "react";
import theme from "../../../utils/theme";
import { Flex } from "../../../components/Grids";
import { P4 } from "../../../components/Typography";
import { authActions } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import axiosInstance from "@/app/[locale]/lib/axios";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";

const ResendCode = ({ timerReset, resetTimer } : any) => {
  const email = getCookie("email");
  const trans = useTranslations("Auth");

  const resendCodeHandler = async () => {
    try{
      const response: any = await axiosInstance.post("check-email", { email });
      showNotification({
        type: "success",
        message: response.data.message,
      });
    }catch(error: any){
      if(error.response){
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    }
    resetTimer()
  };
  return (
    <Flex gap="0.5rem" justify="center" fullWidth align="center">
      <P4 textAlign="center" weight="100">
        {trans("notReceivedCode")}
      </P4>
      <P4>
        <Button
          disabled={!timerReset}
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
