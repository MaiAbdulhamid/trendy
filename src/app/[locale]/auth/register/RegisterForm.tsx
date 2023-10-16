import React from "react";
import TextInput from "../../components/Form/TextInput";
import EmailInput from "../../components/Form/EmailInput";
import SubmitButton from "../../components/Form/SubmitButton";
import { useTranslations } from "next-intl";
import PhoneNumberInput from "../../components/Form/PhoneNumberInput";
import SelectInput from "../../components/Form/SelectInput";
import DateInput from "../../components/Form/DateInput";
import PasswordInput from "../../components/Form/PasswordInput";
import CheckboxInput from "../../components/Form/CheckboxInput";
import { Flex } from "../../components/Grids";
import { P4 } from "../../components/Typography";
import Button from "../../components/Button/Button";
import URLS from "../../utils/urls";
import theme from "../../utils/theme";
import { useDisclosure } from "@mantine/hooks";
import TermsAndConditionsModal from "./TermsAndConditionsModal";
import { Form } from "@mongez/react-form";

const RegisterForm = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const trans = useTranslations("Auth");

  const onSubmit = ({ form, values }: any) => {
    console.log(values);
    console.log(form.isSubmitting)
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
          <DateInput name="dob" label="dateOfBirth" icon />
          <PasswordInput
            name="password"
            placeholder="******"
            icon
            label="password"
            required
          />
          <PasswordInput
            name="confirmPassword"
            match="password"
            placeholder="******"
            icon
            label="confirmPassword"
            required
          />
          <CheckboxInput
            name="accept"
            required
            label={
              <P4 color={theme.colors.black[300]}>
                {trans("accept")}{" "}
                <Button
                  type="button"
                  noStyle
                  onClick={open}
                >
                  <P4 color={theme.colors.primaryColor}>{trans("termsAndConditions")}</P4>
                </Button>
              </P4>
            }
          />
          <Flex direction="column" fullWidth gap="0.5rem">
            <SubmitButton
              fullWidth
              variant="primary"
            >
              {trans("signup")}
            </SubmitButton>
            <P4 textAlign="center" color={theme.colors.black[300]}>
              {trans("haveAccount")}{" "}
              <Button
                type="button"
                noStyle
                href={URLS.auth.login}
              >
                <P4 color={theme.colors.primaryColor}>{trans("login")}</P4>
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
