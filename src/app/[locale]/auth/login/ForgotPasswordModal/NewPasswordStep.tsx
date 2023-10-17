import React from "react";
import EmailInput from "../../../components/Form/EmailInput";
import SubmitButton from "../../../components/Form/SubmitButton";
import { useTranslations } from "next-intl";
import { Flex } from "../../../components/Grids";
import { Form } from "@mongez/react-form";
import PasswordInput from "../../../components/Form/PasswordInput";

const NewPasswordStep = () => {
  const trans = useTranslations("Auth");

  const onSubmit = ({ form, values }: any) => {
    console.log(values);
    console.log(form.isSubmitting());
  };

  return (
    <>
      <Form onSubmit={onSubmit} method="post">
        <Flex direction="column" gap="0.5rem" fullWidth>
          <PasswordInput
            name="password"
            placeholder="******"
            icon
            label="password"
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
    </>
  );
};

export default NewPasswordStep;
