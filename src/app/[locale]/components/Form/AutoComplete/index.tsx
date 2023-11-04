"use client";
import {
  AutoCompleteWrapper,
  WrapperInput,
} from "../styles";
import InputError from "../InputError";
import { Flex } from "../../Grids";
import { InputPropsType } from "../types";
import {
  useFormControl,
} from "@mongez/react-form";
import { requiredRule } from "@mongez/react-form";
import { Autocomplete } from "@mantine/core";
import { SearchIcon } from "../../../assets/svgs";

function AutoComplete({
  placeholder,
  label,
  icon,
  ...props
}: InputPropsType) {
  const { value, changeValue, error } = useFormControl(props);

  return (
    <Flex direction="column" gap="0" fullWidth>
      <WrapperInput error={error}>
        <AutoCompleteWrapper>
          <Autocomplete
            className={props.className ?? "search"}
            placeholder={placeholder}
            leftSection={icon ?? <SearchIcon />}
            data={props.data}
            value={value}
            onChange={changeValue}
            // visibleFrom="xs"
          />
        </AutoCompleteWrapper>
      </WrapperInput>
      <InputError error={error} />
    </Flex>
  );
}

export default AutoComplete;

AutoComplete.defaultProps = {
  rules: [requiredRule],
};
