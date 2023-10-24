"use client";
import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import { useTranslations } from "next-intl";
import { ModalWrapper } from "../../login/style";
import { Flex } from "../../../components/Grids";
import SubmitButton from "../../../components/Form/SubmitButton";
import VerificationInputs from "./VerificationInputs";
import CodeExpired from "./CodeExpired";
import ResendCode from "./ResendCode";
import { useDisclosure } from "@mantine/hooks";
import NewPasswordModal from "../../login/NewPasswordModal";
import { showNotification } from "../../../components/Notifications/showNotification";
import Heading from "../Heading";
import axiosInstance from "@/app/[locale]/lib/axios";
import { getCookie, setCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@/app/store";

const VerificationModal = ({ opened, close, verify }: any) => {
  const [
    openedNewPassword,
    { open: openNewPassword, close: closeNewPassword },
  ] = useDisclosure(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const trans = useTranslations("Auth");
  const [timerReset, resetTimer] = React.useState(false);

  const onSubmit = async (code: any) => {
    setIsSubmitting(true);
    try {
      const response: any = await axiosInstance.post("activate-account", {
        code,
        email: getCookie("email"),
      });
      setCookie("token", response.data.data.jwt_token);
      showNotification({
        type: "success",
        message: response.data.message,
      });
      close();
      if (!verify) {
        openNewPassword();
      }
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
          <Heading title="verifyTitle" subTitle="verifySubTitle" />
          <form method="post" onSubmit={onSubmit}>
            <Flex direction="column" gap="0.5rem" fullWidth>
              <VerificationInputs callback={onSubmit} />
              {!timerReset && <CodeExpired resetTimer={resetTimer} />}
              <ResendCode timerReset={timerReset} resetTimer={resetTimer} />
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
