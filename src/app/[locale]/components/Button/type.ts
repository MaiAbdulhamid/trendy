import { ButtonProps as BaseButtonProps } from "@mantine/core";
import React from "react";

export type ButtonProps = BaseButtonProps &
  React.HTMLAttributes<HTMLButtonElement> & {
    ref?: React.RefObject<HTMLInputElement>;

    rounded?: boolean;

    noStyle?: boolean;

    href?: string;

    component?: any;

    type?: "submit" | "button";

    fullWidth?: boolean;

    height?: string;
  };
