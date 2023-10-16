"use client";
import { StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { EmailIcon } from "../../../assets/svgs";
import { InputPropsType } from "../types";

function EmailInput({
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
          {icon && <EmailIcon />}
          <StyledInput
            type="email"
            placeholder={placeholder}
            {...props}
          />
        </Wrapper>
      </WrapperInput>
      <InputError name={name} />
    </Flex>
  );
}

export default EmailInput;
