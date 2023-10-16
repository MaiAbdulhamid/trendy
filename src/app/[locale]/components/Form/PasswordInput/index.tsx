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

function PasswordInput({
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
  const [showPassword, setShowPassword] = useState(false) 
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  }
  return (
    <Flex
      direction="column"
      fullWidth
      gap="0"
    >
      <InputLabel htmlFor={id} required={required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          <StyledInput
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
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
      <InputError name={name} />
    </Flex>
  );
}

export default PasswordInput;

