import React, { useEffect, useState } from "react";
import EmailInput from "../../components/Form/EmailInput";
import SubmitButton from "../../components/Form/SubmitButton";
import { useTranslations } from "next-intl";
import PasswordInput from "../../components/Form/PasswordInput";
import { Flex } from "../../components/Grids";
import { P4 } from "../../components/Typography";
import Button from "../../components/Button/Button";
import URLS from "../../utils/urls";
import theme from "../../utils/theme";
import { useDisclosure } from "@mantine/hooks";
import { Form, HiddenInput } from "@mongez/react-form";
import ForgotPasswordModal from "./ForgotPasswordModal";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { showNotification } from "../../components/Notifications/showNotification";
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openedForgotPassword, { open : openForgotPassword, close : closeForgotPassword }] = useDisclosure(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const router = useRouter()
  const trans = useTranslations("Auth");

  const onSubmit = async ({ form, values }: any) => {
    setIsSubmitting(form.isSubmitting());
    const response: any = await dispatch(authActions.login(values));
    if(response.error){
      showNotification({
        type: "danger",
        message: response.error.message,
      });
      setIsSubmitting(false);
    }else{
      showNotification({
        type: "success",
        message: response.payload.message,
      });
      setIsSubmitting(false);

      setTimeout(() => {
        router.push('/')
      }, 2000)
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit} method="post">
        <Flex direction="column" gap="0.5rem" fullWidth>
          <EmailInput
            name="key"
            label="email"
            placeholder="example@example.com"
            icon
            required
          />
          <PasswordInput
            name="password"
            placeholder="******"
            icon
            label="password"
            required
          />
          <HiddenInput name="type" value={1} />
          <Flex>
            <Button type="button" noStyle onClick={openForgotPassword}>
              <P4 color={theme.colors.black[300]}>{trans("forgotPasswordQ")}</P4>
            </Button>
          </Flex>
          <Flex direction="column" fullWidth gap="0.5rem">
            <SubmitButton isSubmitting={isSubmitting} fullWidth variant="primary">
              {trans("login")}
            </SubmitButton>
            <P4 textAlign="center" color={theme.colors.black[300]}>
              {trans("notHaveAccount")}{" "}
              <Button type="button" noStyle href={URLS.auth.signup}>
                <P4 color={theme.colors.primaryColor}>{trans("signup")}</P4>
              </Button>
            </P4>
          </Flex>
        </Flex>
      </Form>
      <ForgotPasswordModal opened={openedForgotPassword} close={closeForgotPassword} />
    </>
  );
};

export default LoginForm;
