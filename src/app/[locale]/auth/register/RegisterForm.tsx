import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import TermsAndConditionsModal from "./TermsAndConditionsModal";
import { Form } from "@mongez/react-form";
import { showNotification } from "../../components/Notifications/showNotification";
import moment from "moment";
import Inputs from "./Inputs";
import VerificationModal from "../components/VerificationCodeModal";
import axiosInstance from "../../lib/axios";
import { setCookie } from "cookies-next";
import Loader from "../../components/Loader";
import cache from "@mongez/cache";

const RegisterForm = () => {
  const [openedTerms, { open: openTerms, close: closeTerms }] = useDisclosure(false);
  const [openedVerify, { open: openVerify, close: closeVerify }] = useDisclosure(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    setIsPageLoading(false)
  }, [isPageLoading]);

  const onSubmit = async ({ form, values }: any) => {
    setIsSubmitting(form.isSubmitting());
    const formattedFormData = {
      ...values,
      gender: +values.gender,
      dob: moment(values.dob).format('YYYY-MM-DD')
    }
    try {
      const response: any = await axiosInstance.post("register", formattedFormData);
      showNotification({
        type: "success",
        message: response.data.message,
      });
      cache.set('email', values.phone)
      cache.set('country_id', values.country_id)

      openVerify();

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

  if(isPageLoading) return <Loader />

  return (
    <>
      <Form onSubmit={onSubmit} method="post">
        <Inputs openTerms={openTerms} isSubmitting={isSubmitting} />
      </Form>
      <TermsAndConditionsModal opened={openedTerms} close={closeTerms} />
      <VerificationModal opened={openedVerify} close={closeVerify} verify />
    </>
  );
};

export default RegisterForm;
