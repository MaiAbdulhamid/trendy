"use client";
import { PhoneInputStyled, StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { EmailIcon, FlagIcon, LineIcon } from "../../../assets/svgs";
import { InputPropsType } from "../types";

function PhoneNumberInput({
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
        <Wrapper style={{overflow: 'hidden'}}>
          {icon && (
            <Flex align="center" gap="5px">
              <FlagIcon />
              <span>+974</span>
              <LineIcon />
            </Flex>
          )}
          <PhoneInputStyled
            name={name}
            placeholder={placeholder}
            {...props}
          />
        </Wrapper>
      </WrapperInput>
      <InputError name={name} />
    </Flex>
  );
}

export default PhoneNumberInput;
