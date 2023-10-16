import { ValidationRule } from "react-hook-form";
import { InputProps } from "@mantine/core";
import { useFormControl, FormControlProps } from "@mongez/react-form";

export type InputPropsType = InputProps &
  FormControlProps & {
    name: string;
    defaultValue?: any;
    required?: boolean;
    icon?: boolean;
    label?: any;
    placeholder?: string;
    onChange?: (e: EventListenerObject) => void;
  };