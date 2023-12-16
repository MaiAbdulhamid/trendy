"use client";
import {
  StyledInput,
  StyledSelectInput,
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
import { UserIcon } from "../../../assets/svgs";

function TextInput({
  placeholder,
  label,
  icon,
  defaultValue,
  clearable,
  ...props
}: InputPropsType) {
  const { id, value, changeValue, error } = useFormControl(props);

  const trans = useTranslations("Auth");

  return (
    <Flex direction="column" gap="0" fullWidth>
      {label && (
        <InputLabel htmlFor={id} required={props.required}>
          {trans(label)}
        </InputLabel>
      )}
      <WrapperInput error={error} className="input-wrapper">
        <Wrapper className="wrapper">
          {icon && <UserIcon />}
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
      <InputError error={error} />
    </Flex>
  );
}

export default TextInput;

TextInput.defaultProps = {
  type: "text",
  rules: [requiredRule, minLengthRule, maxLengthRule],
};
