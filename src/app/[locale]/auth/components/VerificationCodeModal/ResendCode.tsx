import Button from "../../../components/Button/Button";
import { useTranslations } from "next-intl";
import React from "react";
import theme from "../../../utils/theme";
import { Flex } from "../../../components/Grids";
import { P4 } from "../../../components/Typography";
import axiosInstance from "../../../lib/axios";
import { showNotification } from "../../../components/Notifications/showNotification";
import cache from "@mongez/cache";

const ResendCode = ({ timerReset, resetTimer } : any) => {
  const trans = useTranslations("Auth");
  const email = cache.get("email");

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
