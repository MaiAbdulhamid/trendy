"use client";
import {
  CountryIconWrapper,
  StyledInput,
  Wrapper,
  WrapperInput,
} from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { LineIcon } from "../../../assets/svgs";
import { InputPropsType } from "../types";
import {
  maxLengthRule,
  minLengthRule,
  minRule,
  numberRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/[locale]/lib/axios";
import SelectInput from "../SelectInput";
import Image from "next/image";

function PhoneNumberInput({
  placeholder,
  label,
  icon,
  id,
  onChangeCountry,
  ...props
}: InputPropsType) {
  const { value, changeValue, error, otherProps } = useFormControl(props);

  const trans = useTranslations("Auth");
  const [countries, setCountries] = useState<any>([]);

  const getCountries = async () => {
    try {
      const response: any = await axiosInstance.get("countries");
      const filteredCountries = response.data.data.data.map((c: any) => {
        return {
          label: c.code,
          value: String(c.id),
        };
      });
      setCountries(filteredCountries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <Flex direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper style={{ overflow: "hidden" }}>
          {icon && (
            <CountryIconWrapper>
              <Flex align="center" gap="5px">
                <SelectInput
                  name="country_id"
                  data={countries}
                  defaultValue={props.country_id || "3"}
                  onChange={onChangeCountry}
                />
                <LineIcon />
              </Flex>
            </CountryIconWrapper>
          )}
          <StyledInput
            placeholder={placeholder}
            value={value}
            onChange={(e: any) => {
              changeValue(e.target.value);
            }}
            {...otherProps}
          />
        </Wrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default PhoneNumberInput;
PhoneNumberInput.defaultProps = {
  type: "number",
  rules: [requiredRule, numberRule, minRule, maxLengthRule, minLengthRule],
};
