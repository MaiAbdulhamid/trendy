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
import { showNotification } from "../../components/Notifications/showNotification";
import { useRouter } from "next/navigation";
import VerificationModal from "../components/VerificationCodeModal";
import axiosInstance from "../../lib/axios";
import { setCookie } from "cookies-next";
import Loader from "../../components/Loader";
import cache from "@mongez/cache";

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const [
    openedForgotPassword,
    { open: openForgotPassword, close: closeForgotPassword },
  ] = useDisclosure(false);
  const [openedVerify, { open: openVerify, close: closeVerify }] =
    useDisclosure(false);

  const router = useRouter();
  const trans = useTranslations("Auth");

  useEffect(() => {
    setIsPageLoading(false)
  }, [isPageLoading]);

  const onSubmit = async ({ form, values }: any) => {
    setIsSubmitting(form.isSubmitting());

    try {
      const response: any = await axiosInstance.post("login", { ...values });
      // setCookie("token", response?.data.data.jwt_token)
      // setCookie("user", response?.response.data.data);
      showNotification({
        type: "success",
        message: response.data.message,
      });

      cache.set("token", response.data.data.jwt_token);
      cache.set("user", response.data.data);

      router.push("/");

    } catch (error: any) {
      // setCookie("email", error.response?.data?.data?.email);
      cache.set("email", error.response?.data?.data?.email)
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
      if (error.response?.data.status === 406) {
        openVerify();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (cache.get("token")) {
      router.push("/");
    }
  }, [router]);

  if(isPageLoading) return <Loader />;
  
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
              <P4 color={theme.colors.black[300]}>
                {trans("forgotPasswordQ")}
              </P4>
            </Button>
          </Flex>
          <Flex direction="column" fullWidth gap="0.5rem">
            <SubmitButton
              isSubmitting={isSubmitting}
              fullWidth
              variant="primary"
            >
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
      <ForgotPasswordModal
        opened={openedForgotPassword}
        close={closeForgotPassword}
      />
      <VerificationModal opened={openedVerify} close={closeVerify} verify />
    </>
  );
};

export default LoginForm;
