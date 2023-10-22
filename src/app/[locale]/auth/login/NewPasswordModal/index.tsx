import React, { useState } from "react";
import SubmitButton from "../../../components/Form/SubmitButton";
import { useTranslations } from "next-intl";
import { Flex } from "../../../components/Grids";
import { Form } from "@mongez/react-form";
import PasswordInput from "../../../components/Form/PasswordInput";
import Modal from "../../../components/Modal";
import { ModalWrapper } from "../style";
import Heading from "../../components/Heading";
import { showNotification } from "../../../components/Notifications/showNotification";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/store";

const NewPasswordModal = ({ opened, close }: any) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const trans = useTranslations("Auth");
  const onSubmit = async ({ form, values }: any) => {
    setIsSubmitting(true);
    const response: any = await dispatch(authActions.newPassword(values));
    if (response.error) {
      showNotification({
        type: "danger",
        message: response.error.message,
      });
      setIsSubmitting(false);
    } else {
      showNotification({
        type: "success",
        message: response.message || trans("codePassed"),
      });
      setIsSubmitting(false);
      close();
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
          <Flex gap="1rem" direction="column">
            <Heading title="newPassword" subTitle="newPasswordSubTitle" />
            <Form onSubmit={onSubmit} method="post">
              <Flex direction="column" gap="1rem" fullWidth>
                <PasswordInput
                  name="new_password"
                  placeholder="******"
                  icon
                  label="enterNewPassword"
                  required
                  minLength={6}
                />
                <PasswordInput
                  name="confirmPassword"
                  match="password"
                  placeholder="******"
                  icon
                  label="confirmPassword"
                  minLength={6}
                  required
                />
                <SubmitButton
                  isSubmitting={isSubmitting}
                  fullWidth
                  variant="primary"
                >
                  {trans("login")}
                </SubmitButton>
              </Flex>
            </Form>
          </Flex>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default NewPasswordModal;
