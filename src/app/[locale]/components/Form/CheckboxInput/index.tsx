"use client";
import { CheckboxWrapper, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { InputPropsType } from "../types";
import { Checkbox } from "@mantine/core";

function CheckboxInput({
  name,
  placeholder,
  onChange,
  required,
  label,
  icon,
  id,
  ...props
}: InputPropsType) {
  const trans = useTranslations("Auth");

  return (
    <Flex direction="column" fullWidth gap="0">
      <CheckboxWrapper>
        <Checkbox
          type="checkbox"
          placeholder={trans(placeholder)}
          defaultChecked
          label={label}
          {...props}
        />
      </CheckboxWrapper>
      <InputError name={name} />
    </Flex>
  );
}

export default CheckboxInput;
