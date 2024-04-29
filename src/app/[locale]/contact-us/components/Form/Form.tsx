import { H2, P2 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import { FormWrapper } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import { Form } from "@mongez/react-form";
import axiosInstance from "@/app/[locale]/lib/axios";
import SubmitButton from "@/app/[locale]/components/Form/SubmitButton";
import TextInput from "@/app/[locale]/components/Form/TextInput";
import EmailInput from "@/app/[locale]/components/Form/EmailInput";
import TextareaInput from "@/app/[locale]/components/Form/TextareaInput";
import { showNotification } from "@/app/[locale]/components/Notifications/showNotification";

const FormPage = () => {
  const trans = useTranslations("ContactUs");
  const onSubmit = async ({form, values}: any) => {
    try {
      const response = await axiosInstance.post('contact/send', { ...values })
      console.log(response.data)
      showNotification({
        type: "success",
        message: response.data.message,
      });
    } catch (error : any) {
      if (error.response) {
        showNotification({
          type: "danger",
          message: error.response.data.message,
        });
      }
    }
  }
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Flex direction="column" gap="1rem" fullWidth>
          <TextInput name="full_name" placeholder={'fullname'} />
          <EmailInput name="email" type="email" placeholder={"email"} />
          <TextareaInput name="message" placeholder={'message'} />
        </Flex>
        <SubmitButton>{trans('submit')}</SubmitButton>
      </Form>
      
    </FormWrapper>
  );
};

export default FormPage;
