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

const VerificationModal = ({ opened, close }: ModalProps) => {
  const trans = useTranslations("Auth");
  const [
    openedNewPassword,
    { open: openNewPassword, close: closeNewPassword },
  ] = useDisclosure(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (codeValue: any) => {
    console.log(codeValue);
    close();
    openNewPassword();
    
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
                isSubmitting={isLoading}
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
