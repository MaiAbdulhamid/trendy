"use client";
import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import { useTranslations } from "next-intl";
import { ModalWrapper } from "../style";
import { Flex } from "../../../components/Grids";
import SubmitButton from "../../../components/Form/SubmitButton";
import { Form } from "@mongez/react-form";
import Heading from "../../components/Heading";
import VerificationInputs from "./VerificationInputs";
import CodeExpired from "./CodeExpired";
import ResendCode from "./ResendCode";
import { useDisclosure } from "@mantine/hooks";
import { ModalProps } from "./types";
import NewPasswordModal from "./NewPasswordModal";
import { useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../components/Notifications/showNotification";
import { authActions } from "@/app/store";

const VerificationModal = ({ opened, close }: ModalProps) => {
  const enteredEmail = useSelector((state: any) => state.forgotPassword?.email)
  // console.log(enteredEmail)

  const [
    openedNewPassword,
    { open: openNewPassword, close: closeNewPassword },
  ] = useDisclosure(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const trans = useTranslations("Auth");

  const onSubmit = async (code: any) => {
    setIsSubmitting(true);
  
    const preparedFormData = {
      code,
      email: enteredEmail
    }

    const response: any = await dispatch(authActions.verifyEmail(preparedFormData));
    console.log(response)
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
      close();
      openNewPassword();
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
          <form method="post">
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
      <NewPasswordModal opened={openedNewPassword} close={closeNewPassword} />
    </>
  );
};

export default VerificationModal;
