import React, { useState } from "react";
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
import { HiddenInput } from "@mongez/react-form";
interface Props{
  openTerms: () => void,
  isSubmitting: boolean
}

const Inputs = ({openTerms, isSubmitting}: Props) => {
  const trans = useTranslations("Auth");

  return (
    <Flex direction="column" gap="0.5rem" fullWidth>
      <TextInput
        name="full_name"
        label="fullname"
        placeholder="fullname"
        icon
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
        min={0}
      />
      <SelectInput
        name="gender"
        label="gender"
        data={[
          { label: trans("male"), value: "1" },
          { label: trans("female"), value: "2" },
          { label: trans("other"), value: "3" },
        ]}
        defaultValue={0}
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
      <CheckboxInput
        name="accept"
        required
        defaultChecked={true}
        label={
          <P4 color={theme.colors.black[300]}>
            {trans("accept")}{" "}
            <Button type="button" noStyle onClick={openTerms}>
              <P4 color={theme.colors.primaryColor}>
                {trans("termsAndConditions")}
              </P4>
            </Button>
          </P4>
        }
      />
      <Flex direction="column" fullWidth gap="0.5rem">
        <SubmitButton fullWidth variant="primary" isSubmitting={isSubmitting}>
          {trans("signup")}
        </SubmitButton>
        <P4 textAlign="center" color={theme.colors.black[300]}>
          {trans("haveAccount")}{" "}
          <Button type="button" noStyle href={URLS.auth.login}>
            <P4 color={theme.colors.primaryColor}>{trans("login")}</P4>
          </Button>
        </P4>
      </Flex>
    </Flex>
  );
};

export default Inputs;
