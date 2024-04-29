import { StyledInput, Wrapper, WrapperInput } from "../styles";
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
import { Switch } from "@mantine/core";

function SwitchInput({
  placeholder,
  label,
  icon,
  clearable,
  ...props
}: InputPropsType) {
  const { value, changeValue, error, otherProps } = useFormControl(props);
  const handleCheck = (event: any) => {
    console.log(event.currentTarget.checked);
    changeValue(Number(event.currentTarget.checked));
  };
  return (
    <Flex direction="column" gap="0" fullWidth>
      <Switch
        // defaultChecked
        label={trans(label)}
        checked={value}
        onChange={handleCheck}
        {...otherProps}
      />
      <InputError error={error} />
    </Flex>
  );
}

export default SwitchInput;

SwitchInput.defaultProps = {
  rules: [requiredRule],
  defaultValue: 1,
};
