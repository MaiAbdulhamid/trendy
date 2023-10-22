"use client";
import { DateWrapper, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { InputPropsType } from "../types";
import { DateIcon } from "../../../assets/svgs";
import { DateInput as DatePickerInput, DateInputProps } from "@mantine/dates";
import InputLabel from "../InputLabel";
import { useFormControl } from "@mongez/react-form";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

function DateInput({ placeholder, label, icon, id, ...props }: any) {
  const { changeValue, error } = useFormControl(props);

  const trans = useTranslations("Auth");

  return (
    <Flex direction="column" fullWidth gap="0">
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          <DateWrapper>
            <DatePickerInput
              placeholder={placeholder}
              wrapperClassName="datePicker"
              onChange={changeValue}
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
      <InputError error={error} />
    </Flex>
  );
}

export default DateInput;
