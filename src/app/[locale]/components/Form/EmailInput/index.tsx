"use client";
import { StyledInput, Wrapper, WrapperInput } from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { useTranslations } from "next-intl";
import { EmailIcon } from "../../../assets/svgs";
import { InputPropsType } from "../types";
import { emailRule, requiredRule, useFormControl } from "@mongez/react-form";

function EmailInput({
  placeholder,
  label,
  icon,
  id,
  ...props
}: InputPropsType) {
  const { value, changeValue, error } = useFormControl(props);

  const trans = useTranslations("Auth");

  return (
    <Flex direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput>
        <Wrapper>
          {icon && <EmailIcon />}
          <StyledInput
            placeholder={placeholder}
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

export default EmailInput;

EmailInput.defaultProps = {
  type: "email",
  rules: [requiredRule, emailRule],
};
