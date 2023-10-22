import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import TermsAndConditionsModal from "./TermsAndConditionsModal";
import { Form } from "@mongez/react-form";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { showNotification } from "../../components/Notifications/showNotification";
import { useRouter } from "next/navigation";
import moment from "moment";
import VerificationModal from "./VerificationCode";
import Inputs from "./Inputs";

const RegisterForm = () => {
  const [openedTerms, { open: openTerms, close: closeTerms }] = useDisclosure(false);
  const [openedVerify, { open: openVerify, close: closeVerify }] = useDisclosure(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const router = useRouter();

  const onSubmit = async ({ form, values }: any) => {
    setIsSubmitting(form.isSubmitting());
    const formattedFormData = {
      ...values,
      gender: +values.gender,
      dob: moment(values.dob).format('YYYY-MM-DD')
    }
    const response: any = await dispatch(authActions.signup(formattedFormData));
    if (response.error) {
      showNotification({
        type: "danger",
        message: response.error.message,
      });
      setIsSubmitting(false);
    } else {
      showNotification({
        type: "success",
        message: response.payload.message,
      });
      setIsSubmitting(false);
      openVerify();
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit} method="post">
        <Inputs openTerms={openTerms} isSubmitting={isSubmitting} />
      </Form>
      <TermsAndConditionsModal opened={openedTerms} close={closeTerms} />
      <VerificationModal opened={openedVerify} close={closeVerify} />
    </>
  );
};

export default RegisterForm;
