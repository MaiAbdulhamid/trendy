import React, { useState } from "react";
import SubmitButton from "../../../components/Form/SubmitButton";
import { useTranslations } from "next-intl";
import { Flex } from "../../../components/Grids";
import { Form } from "@mongez/react-form";
import PasswordInput from "../../../components/Form/PasswordInput";
import Modal from "../../../components/Modal";
import { ModalWrapper } from "./style";
import { showNotification } from "../../../components/Notifications/showNotification";
import axiosInstance from "../../../lib/axios";
import cache from "@mongez/cache";
import { H4, H6, H7 } from "@/app/[locale]/components/Typography";
import EmailInput from "@/app/[locale]/components/Form/EmailInput";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import Button from "@/app/[locale]/components/Button/Button";

const DeleteAccountModal = ({ opened, close }: any) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const trans = useTranslations("Profile");

  const onSubmit = async ({ values }: any) => {
    setIsSubmitting(true);
    try {
      const response: any = await axiosInstance.post(
        "user/deleteAccount",

      );
      cache.set('user', response.data.data);
      showNotification({
        type: "success",
        message: response.data.message,
      });
      close();
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
      <Modal opened={opened} close={close} size="md" centered>
        <ModalWrapper>
          <Flex gap="1rem" direction="column" fullWidth>
            <H6>{trans("deleteAccount")}</H6>
            <Line margin="0" />
            <H7>{trans("sure")}</H7>
            <Form onSubmit={onSubmit}>
              <Flex  gap="1rem" fullWidth justify="space-between">
                <Button variant="outline" onClick={close}>
                  {trans('no')}
                </Button>
                <SubmitButton
                  isSubmitting={isSubmitting}
                  variant="primary"
                  type="submit"
                >
                  {trans("yes")}
                </SubmitButton>
              </Flex>
            </Form>
          </Flex>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default DeleteAccountModal;
