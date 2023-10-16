"use client";
import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import { useTranslations } from "next-intl";
import { ForgotPasswordModalWrapper, HeadingWrapper } from "../style";
import { H3, P4 } from "../../../components/Typography";
import theme from "../../../utils/theme";
import EmailInput from "../../../components/Form/EmailInput";
import { Flex } from "../../../components/Grids";
import SubmitButton from "../../../components/Form/SubmitButton";
import { Form } from "@mongez/react-form";
import Heading from "../../components/Heading";

interface ModalProps {
  opened: boolean;
  close: any;
}
const ForgotPasswordModal = ({ opened, close }: ModalProps) => {
  const trans = useTranslations("Auth");
  const onSubmit = ({ form, values }: any) => {
    console.log(values);
    console.log(form.isSubmitting);
  };
  return (
    <Modal
      opened={opened}
      close={close}
      size="xl"
      withCloseButton={false}
      centered
    >
      <ForgotPasswordModalWrapper>
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
            <SubmitButton fullWidth variant="primary">
              {trans("login")}
            </SubmitButton>
          </Flex>
        </Form>
      </ForgotPasswordModalWrapper>
    </Modal>
  );
};

export default ForgotPasswordModal;
