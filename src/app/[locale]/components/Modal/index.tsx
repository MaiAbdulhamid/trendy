"use client";
import React from "react";
import { Modal as MantineModal } from "@mantine/core";

interface ModalProps {
  children: React.ReactNode;
  opened: boolean;
  close: () => void;
  title?: string;
  size?: "xs" | "md" | "lg" | "xl" | "xxl" | any;
  withCloseButton?: boolean;
  centered?: boolean
}

const Modal = ({ children, opened, close, title, size, withCloseButton, centered }: ModalProps) => {
  return (
    <MantineModal
      opened={opened}
      onClose={close}
      title={title ?? ""}
      size={size}
      withCloseButton={withCloseButton}
      centered={centered}
    >
      {children}
    </MantineModal>
  );
};

export default Modal;
