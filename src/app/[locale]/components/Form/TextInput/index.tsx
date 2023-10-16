"use client";
import { StyledInput, StyledSelectInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { InputPropsType } from "../types";
import { useFormControl, FormControlProps } from "@mongez/react-form";

function TextInput({
  placeholder,
  required,
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
          <StyledInput
            placeholder={trans(placeholder)}
            value={value}
            onChange={(e: any) => {
              changeValue(e.target.value);
            }}
            {...props}
          />
        </Wrapper>
      </WrapperInput>
      {/* <InputError name={name} /> */}
    </Flex>
  );
}

export default TextInput;

TextInput.defaultProps = {
  type: "text",
};


