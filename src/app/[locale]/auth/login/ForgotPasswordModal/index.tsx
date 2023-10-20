"use client";
import React, { useState } from "react";
import Modal from "../../../components/Modal";
import { useTranslations } from "next-intl";
import { ModalWrapper } from "../style";
import EmailInput from "../../../components/Form/EmailInput";
import { Flex } from "../../../components/Grids";
import SubmitButton from "../../../components/Form/SubmitButton";
import { Form } from "@mongez/react-form";
import Heading from "../../components/Heading";
import VerificationModal from "./VerificationModal";
import { useDisclosure } from "@mantine/hooks";
import { ModalProps } from "./types";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../components/Notifications/showNotification";
import { authActions } from "@/app/store";

const ForgotPasswordModal = ({ opened, close }: ModalProps) => {
  const [openedVerify, { open: openVerify, close: closeVerify }] =
    useDisclosure(false);

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
      openVerify();
    }
  };
  return (
    <>
      <Modal
        opened={opened}
        close={close}
        size="xl"
        withCloseButton={false}
        centered
      >
        <ModalWrapper>
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
              <SubmitButton
                isSubmitting={isSubmitting}
                fullWidth
                variant="primary"
              >
                {trans("resetPassword")}
              </SubmitButton>
            </Flex>
          </Form>
        </ModalWrapper>
      </Modal>
      <VerificationModal opened={openedVerify} close={closeVerify} />
    </>
  );
};

export default ForgotPasswordModal;
