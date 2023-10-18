"use client";
import React from "react";
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

const ForgotPasswordModal = ({ opened, close }: ModalProps) => {
  const [openedVerify, { open: openVerify, close: closeVerify }] = useDisclosure(false);

  const trans = useTranslations("Auth");
  const onSubmit = ({ form, values }: any) => {
    console.log(values);
    console.log(form.isSubmitting);
    close()
    openVerify()
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
            <SubmitButton fullWidth variant="primary">
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
