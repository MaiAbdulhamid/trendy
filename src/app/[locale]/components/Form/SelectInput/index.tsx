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
  clearable,
  ...props
}: InputPropsType) {
  const { value, changeValue, error, id, otherProps } = useFormControl(props);

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
            clearable={clearable}
            value={value}
            onChange={changeValue}
            {...otherProps}
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
