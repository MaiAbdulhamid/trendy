import {
  StyledInput,
  Wrapper,
  WrapperInput,
} from "../styles";
import InputError from "../InputError";
import InputLabel from "../InputLabel";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import {
  maxRule,
  minRule,
  numberRule,
  useFormControl,
} from "@mongez/react-form";
import { requiredRule } from "@mongez/react-form";
import { trans } from "@mongez/localization";

function NumberInput({
  placeholder,
  label,
  icon,
  clearable,
  ...props
}: InputPropsType) {
  const { id, value, changeValue, error, otherProps } = useFormControl(props);

  return (
    <Flex direction="column" gap="0" fullWidth>
      <InputLabel htmlFor={id} required={props.required}>
        {trans(label)}
      </InputLabel>
      <WrapperInput error={error}>
        <Wrapper>
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

export default NumberInput;

NumberInput.defaultProps = {
  type: "number",
  rule: "number",
  rules: [requiredRule, minRule, maxRule, numberRule],
};
