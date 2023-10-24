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
import VerificationModal from "../../components/VerificationCodeModal";
import { useDisclosure } from "@mantine/hooks";
import { showNotification } from "../../../components/Notifications/showNotification";
import axiosInstance from "@/app/[locale]/lib/axios";
import { setCookie } from "cookies-next";

const ForgotPasswordModal = ({ opened, close }: any) => {
  const [openedVerify, { open: openVerify, close: closeVerify }] =
    useDisclosure(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const trans = useTranslations("Auth");

  const onSubmit = async ({ form, values }: any) => {
    setIsSubmitting(true);
    try {
      const response: any = await axiosInstance.post("check-email", values);
      console.log(response)
      setCookie("email", values.email);
      showNotification({
        type: "success",
        message: response.data.message,
      });
      close();
      openVerify();
    } catch (error: any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    } finally {
      setIsSubmitting(false);
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
