import React, { useState } from "react";
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
import { Form } from "@mongez/react-form";
import ForgotPasswordModal from "./ForgotPasswordModal";

const LoginForm = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const trans = useTranslations("Auth");

  const onSubmit = ({ form, values }: any) => {
    console.log(values);
    console.log(form.isSubmitting);
  };

  return (
    <>
      <Form onSubmit={onSubmit} method="post">
        <Flex direction="column" gap="0.5rem" fullWidth>
          <EmailInput
            name="email"
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
          <Flex>
            <Button type="button" noStyle onClick={open}>
              <P4 color={theme.colors.black[300]}>{trans("forgotPasswordQ")}</P4>
            </Button>
          </Flex>
          <Flex direction="column" fullWidth gap="0.5rem">
            <SubmitButton fullWidth variant="primary">
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
      <ForgotPasswordModal opened={opened} close={close} />
    </>
  );
};

export default LoginForm;
