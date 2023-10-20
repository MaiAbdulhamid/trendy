import React, { useState } from "react";
import SubmitButton from "../../../../components/Form/SubmitButton";
import { useTranslations } from "next-intl";
import { Flex } from "../../../../components/Grids";
import { Form } from "@mongez/react-form";
import PasswordInput from "../../../../components/Form/PasswordInput";
import Heading from "../../../components/Heading";
import { showNotification } from "../../../../components/Notifications/showNotification";

const StepThree = ({ close }: any) => {
  const trans = useTranslations("Auth");
  const [showSuccessNotification, setShowSuccessNotification] =
    useState<boolean>(false);

  const onSubmit = ({ form, values }: any) => {
    console.log(values);
    console.log(form.isSubmitting());
    showNotification({
      type: "danger",
      message: "Error",
    });
  };
  return (
    <>
      <Flex gap="1rem" direction="column">
        <Heading title="newPassword" subTitle="newPasswordSubTitle" />
        <Form onSubmit={onSubmit} method="post">
          <Flex direction="column" gap="1rem" fullWidth>
            <PasswordInput
              name="password"
              placeholder="******"
              icon
              label="enterNewPassword"
              required
              minLength={6}
            />
            <PasswordInput
              name="confirmPassword"
              match="password"
              placeholder="******"
              icon
              label="confirmPassword"
              minLength={6}
              required
            />
            <SubmitButton fullWidth variant="primary">
              {trans("login")}
            </SubmitButton>
          </Flex>
        </Form>
      </Flex>
    </>
  );
};

export default StepThree;
