"use client";
import { StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { EyeIcon } from "../../../assets/svgs";
import Button from "../../Button/Button";
import { InputPropsType } from "../types";
import {
  matchRule,
  minLengthRule,
  minRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

function PasswordInput({
  placeholder,
  required,
  label,
  icon,
  id,
  ...props
}: InputPropsType) {
  const { value, changeValue, error } = useFormControl(props);

  const trans = useTranslations("Auth");
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Flex direction="column" fullWidth gap="0">
      <InputLabel htmlFor={id} required={required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          <StyledInput
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => {
              changeValue(e.target.value);
            }}
            {...props}
          />
          {icon && (
            <Flex align="center" gap="5px">
              <Button onClick={showPasswordHandler} noStyle type="button">
                <EyeIcon />
              </Button>
            </Flex>
          )}
        </Wrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default PasswordInput;
PasswordInput.defaultProps = {
  rules: [requiredRule, matchRule, minLengthRule, minRule],
};