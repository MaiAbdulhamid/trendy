"use client";
import { DateWrapper, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { InputPropsType } from "../types";
import { DateIcon } from "../../../assets/svgs";
import { DatePickerInput } from '@mantine/dates';
import InputLabel from "../InputLabel";

function DateInput({
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
      fullWidth
      gap="0"
    >
      <InputLabel htmlFor={id} required={required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput >
        <Wrapper>
          <DateWrapper>
            <DatePickerInput
              placeholder={placeholder}
              dateFormat="yyyy-MM-dd"
              wrapperClassName="datePicker"
              {...props}
            />
          </DateWrapper>
          {icon && (
            <Flex align="center" gap="5px">
              <DateIcon />
            </Flex>
          )}
        </Wrapper>
      </WrapperInput>
      <InputError name={name} />
    </Flex>
  );
}

export default DateInput;
