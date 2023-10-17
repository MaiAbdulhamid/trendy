"use client";
import React, { useEffect, useState, useRef } from "react";
import Modal from "../../../components/Modal";
import { useTranslations } from "next-intl";
import { ModalWrapper } from "../style";
import EmailInput from "../../../components/Form/EmailInput";
import { Flex } from "../../../components/Grids";
import SubmitButton from "../../../components/Form/SubmitButton";
import { Form } from "@mongez/react-form";
import Heading from "../../components/Heading";
import VerificationInputs from "./VerificationInputs";
import CodeExpired from "./CodeExpired";
import ResendCode from "./ResendCode";

interface ModalProps {
  opened: boolean;
  close: any;
}
const VerificationModal = ({ opened, close }: ModalProps) => {
  const trans = useTranslations("Auth");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = ({ form, values }: any) => {
    console.log(values);
    setIsLoading(form.isSubmitting());
  };
  return (
    <Modal
      opened={opened}
      close={close}
      size="xl"
      withCloseButton={false}
      centered
    >
      <ModalWrapper>
        <Heading title="verifyTitle" subTitle="verifySubTitle" />
        <Form method="post">
          <Flex direction="column" gap="0.5rem" fullWidth>
            <VerificationInputs callback={onSubmit} />
            <CodeExpired />
            <ResendCode />
            <SubmitButton fullWidth variant="primary" isSubmitting={isLoading}>
              {trans("verify")}
            </SubmitButton>
          </Flex>
        </Form>
      </ModalWrapper>
    </Modal>
  );
};

export default VerificationModal;
