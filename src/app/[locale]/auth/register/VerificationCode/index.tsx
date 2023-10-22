"use client";
import React, { useState } from "react";
import Modal from "../../../components/Modal";
import { useTranslations } from "next-intl";
import { ModalWrapper } from "../../login/style";
import { Flex } from "../../../components/Grids";
import SubmitButton from "../../../components/Form/SubmitButton";
import Heading from "../../components/Heading";
import VerificationInputs from "./VerificationInputs";
import CodeExpired from "./CodeExpired";
import ResendCode from "./ResendCode";
import { useDisclosure } from "@mantine/hooks";
import { ModalProps } from "./types";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../components/Notifications/showNotification";
import { authActions } from "@/app/store";
import { useRouter } from 'next/navigation'

const VerificationModal = ({ opened, close }: ModalProps) => {
  const [
    openedNewPassword,
    { open: openNewPassword, close: closeNewPassword },
  ] = useDisclosure(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const trans = useTranslations("Auth");
  const router = useRouter()

  const onSubmit = async (code: any) => {
    setIsSubmitting(true);

    const preparedFormData = {
      code,
    };

    const response: any = await dispatch(
      authActions.verifyEmail(preparedFormData)
    );
    if (response.error) {
      showNotification({
        type: "danger",
        message: response.error.message,
      });
      setIsSubmitting(false);
    } else {
      showNotification({
        type: "success",
        message: response.message || trans("activatedSuccessfully"),
      });
      setIsSubmitting(false);
      close();
      setTimeout(() => {
        router.push(`/`)
      }, 2000)
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
          <Heading title="verifyTitle" subTitle="verifySubTitle" />
          <form method="post" onSubmit={onSubmit}>
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
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default VerificationModal;
