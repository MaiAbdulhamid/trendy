import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "../../components/Form/TextInput";
import EmailInput from "../../components/Form/EmailInput";
import SubmitButton from "../../components/Form/SubmitButton";
import { useTranslations } from "next-intl";
import PhoneNumberInput from "../../components/Form/PhoneNumberInput";
import SelectInput from "../../components/Form/SelectInput";
import DateInput from "../../components/Form/DateInput";
import { isRtl } from "../../utils/general";
import PasswordInput from "../../components/Form/PasswordInput";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckboxInput from "../../components/Form/CheckboxInput";
import { Flex } from "../../components/Grids";
import { createUserSchema } from "../../models/User";
import { P1, P4 } from "../../components/Typography";
import Button from "../../components/Button/Button";
import URLS from "../../utils/urls";
import theme from "../../utils/theme";
import { useDisclosure } from "@mantine/hooks";
import TermsAndConditionsModal from "./TermsAndConditionsModal";
import { Form } from "@mongez/react-form";

interface FormInputs {
  full_name: string;
  email: string;
  phone: string;
  gender: string;
}
const RegisterForm = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const trans = useTranslations("Auth");

  const formMethods = useForm<FormInputs>({
    reValidateMode: "onBlur",
  });
  useForm<FormData>({
    reValidateMode: "onBlur",
    resolver: zodResolver(createUserSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = formMethods;

  const onSubmit = ({values}: any) => {
    console.log(values);
  };

  return (
    <>
        <Form onSubmit={onSubmit} method="post">
          <Flex direction="column" gap="0.5rem" fullWidth>
            <TextInput
              name="full_name"
              label="fullname"
              placeholder="fullname"
              icon={false}
              required
            />
            <EmailInput
              name="email"
              label="email"
              placeholder="example@example.com"
              icon
              required
            />
            <PhoneNumberInput
              name="phone"
              placeholder="51700500"
              icon
              label="phoneNumber"
              required
            />
            <SelectInput
              name="gender"
              label="gender"
              data={[trans("male"), trans("female"), trans("other")]}
              required
              clearable
            />
            <DateInput
              name="dob"
              label="dateOfBirth"
              icon
            />
            <PasswordInput
              name="password"
              placeholder="******"
              icon
              label="password"
              required
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="******"
              icon
              label="confirmPassword"
              required
            />
            <CheckboxInput
              name="accept"
              label={
                <P4>
                  {trans("accept")}{" "}
                  <Button
                    noStyle
                    color={theme.colors.primaryColor}
                    onClick={open}
                  >
                    {trans("termsAndConditions")}
                  </Button>
                </P4>
              }
            />
            <Flex direction="column" fullWidth gap="0.5rem">
              <SubmitButton
                isSubmitting={isSubmitting}
                fullWidth
                variant="primary"
              >
                {isSubmitting ? "Submitting..." : trans("signup")}
              </SubmitButton>
              <P4 textAlign="center" color={theme.colors.black[300]}>
                {trans("haveAccount")}{" "}
                <Button
                  color={theme.colors.primaryColor}
                  type="button"
                  noStyle
                  href={URLS.auth.login}
                >
                  Login
                </Button>
              </P4>
            </Flex>
          </Flex>
        </Form>
      <TermsAndConditionsModal opened={opened} close={close} />
    </>
  );
};

export default RegisterForm;
