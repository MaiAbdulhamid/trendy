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
import { H4, H6 } from "@/app/[locale]/components/Typography";
import EmailInput from "@/app/[locale]/components/Form/EmailInput";
import { Line } from "@/app/[locale]/components/shapes/Lines";

const ChangeEmailModal = ({ opened, close }: any) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const trans = useTranslations("Auth");

  const onSubmit = async ({ values }: any) => {
    setIsSubmitting(true);
    try {
      const response: any = await axiosInstance.post(
        "user/update-profile",
        {...values}
      );
      cache.set('user', response.data.data);
      showNotification({
        type: "success",
        message: response.data.message,
      });
      close();
      window.location.reload();
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
            <H6>{trans("changeEmail")}</H6>
            <Line margin="0" />
            <Form onSubmit={onSubmit}>
              <Flex direction="column" gap="1rem" fullWidth>
                <EmailInput
                  name="email"
                  label={"newEmail"}
                  placeholder={"email"}
                  required
                />
                <SubmitButton
                  isSubmitting={isSubmitting}
                  fullWidth
                  variant="primary"
                  type="submit"
                >
                  {trans("sendVerification")}
                </SubmitButton>
              </Flex>
            </Form>
          </Flex>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default ChangeEmailModal;
