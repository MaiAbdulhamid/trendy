"use client";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { useTranslations } from "next-intl";

interface ModalProps {
  opened: boolean;
  close: any;
}
const ForgotPasswordModal = ({ opened, close }: ModalProps) => {
  const trans = useTranslations("Auth");


  return (
    <Modal
      opened={opened}
      close={close}
      title={trans("termsAndConditions")}
      size="xxl"
    >
      Forgot password
    </Modal>
  );
};

export default ForgotPasswordModal;
