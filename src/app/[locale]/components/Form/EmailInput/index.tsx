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
  const { value, changeValue, error, otherProps } = useFormControl(props);

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
          {icon && <EmailIcon />}
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

export default EmailInput;

EmailInput.defaultProps = {
  type: "email",
  rules: [requiredRule, emailRule],
};
