"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { resolveLink } from "@/app/[locale]/utils/general";
import { CloseIconWrapper, ModalWrapper } from "./style";
import { CloseIcon } from "@/app/[locale]/assets/svgs";
import { Modal } from "@mantine/core";

interface ModalProps {
  opened: boolean;
  close: any;
  record: any;
}
const Popup = ({ opened, close, record }: ModalProps) => {
  console.log(record)
  console.log(resolveLink(record[0]))
  if (!record) return null;
  return (
    <>
      <Modal.Root opened={opened} onClose={close} size="xl" centered>
        <Modal.Overlay />
        <Modal.Content style={{ padding: "0" }}>
          <CloseIconWrapper onClick={close}>
            <CloseIcon />
          </CloseIconWrapper>
          <Modal.Body style={{ padding: "0" }}>
            <ModalWrapper>
              <Link href={resolveLink(record[0])}>
                <img src={record[0]?.image} />
              </Link>
            </ModalWrapper>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default Popup;
