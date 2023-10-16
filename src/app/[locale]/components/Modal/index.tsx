"use client";
import React from "react";
import { Modal as MantineModal } from "@mantine/core";

interface ModalProps {
  children: React.ReactNode;
  opened: boolean;
  close: () => void;
  title?: string;
  size?: "xs" | "md" | "lg" | "xl" | "xxl";
}

const Modal = ({ children, opened, close, title, size }: ModalProps) => {
  return (
    <MantineModal
      opened={opened}
      onClose={close}
      title={title ?? ""}
      size={size}
    >
      {children}
    </MantineModal>
  );
};

export default Modal;
