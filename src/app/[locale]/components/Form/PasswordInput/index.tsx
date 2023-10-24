"use client";
import { StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../../../assets/svgs";
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
            <Flex
              align="center"
              gap="5px"
              style={{ cursor: "pointer" }}
              onClick={showPasswordHandler}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
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
  type: "password",
  rules: [requiredRule, matchRule, minLengthRule, minRule],
};
