"use client";
import { StyledSelectInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { InputPropsType } from "../types";
import { requiredRule, useFormControl } from "@mongez/react-form";

function SelectInput({
  placeholder,
  label,
  icon,
  id,
  defaultValue,
  clearable,
  ...props
}: InputPropsType) {
  const { value, changeValue, error } = useFormControl(props);

  const trans = useTranslations("Auth");

  return (
    <Flex direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          <StyledSelectInput
            placeholder={placeholder}
            defaultValue={defaultValue}
            clearable={clearable}
            value={value}
            onChange={changeValue}
            {...props}
          />
        </Wrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default SelectInput;
SelectInput.defaultProps = {
  rules: [requiredRule],
};
