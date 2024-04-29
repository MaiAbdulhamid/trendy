"use client";
import {
  StyledInput,
  StyledSelectInput,
  StyledTextarea,
  Wrapper,
  WrapperInput,
} from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { InputPropsType } from "../types";
import {
  maxLengthRule,
  minLengthRule,
  useFormControl,
} from "@mongez/react-form";
import { requiredRule } from "@mongez/react-form";

function TextareaInput({
  placeholder,
  label,
  icon,
  defaultValue,
  clearable,
  ...props
}: any) {
  const { id, value, changeValue, error, otherProps } = useFormControl(props);

  const trans = useTranslations("Auth");

  return (
    <Flex direction="column" gap="0" fullWidth>
      {label && (
        <InputLabel htmlFor={id} required={props.required}>
          {trans(label)}
        </InputLabel>
      )}
      <StyledTextarea
        placeholder={trans(placeholder)}
        value={value}
        onChange={(e: any) => {
          changeValue(e.target.value);
        }}
        {...otherProps}
      />
      <InputError error={error} />
    </Flex>
  );
}

export default TextareaInput;

TextareaInput.defaultProps = {
  type: "text",
  rules: [requiredRule, minLengthRule, maxLengthRule],
};
