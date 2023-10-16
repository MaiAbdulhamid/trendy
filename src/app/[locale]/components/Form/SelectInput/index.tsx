"use client";
import { StyledSelectInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { InputPropsType } from "../types";
function SelectInput({
  name,
  placeholder,
  onChange,
  required,
  label,
  icon,
  id,
  defaultValue,
  clearable,
  ...props
}: InputPropsType) {
  const trans = useTranslations("Auth");

  return (
    <Flex
      direction="column"
      gap="0"
      fullWidth
    >
      <InputLabel htmlFor={id} required={required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          <StyledSelectInput
            placeholder={placeholder}
            defaultValue={defaultValue}
            clearable={clearable}
            {...props}
          />
        </Wrapper>
      </WrapperInput>
      <InputError name={name} />
    </Flex>
  );
}

export default SelectInput;

