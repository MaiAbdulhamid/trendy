"use client";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { useTranslations } from "next-intl";

interface ModalProps {
  opened: boolean;
  close: any;
}
const TermsAndConditionsModal = ({ opened, close }: ModalProps) => {
  const trans = useTranslations("Auth");

  const [termsData, setTermsData] = useState<any>();
  const getTermsAndConditions = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "setting?setting_type=terms",
        {
          method: "GET",
        },
      );
      const data = await response.json();
      setTermsData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTermsAndConditions();
  }, []);

  return (
    <Modal
      opened={opened}
      close={close}
      title={trans("termsAndConditions")}
      size="xxl"
    >
      <div dangerouslySetInnerHTML={{ __html: termsData?.content }} />
    </Modal>
  );
};

export default TermsAndConditionsModal;
