import { forwardRef } from "react";
import { BaseButton } from "./style";
import { ButtonProps } from "./type";
import Link from 'next/link';

const Button = forwardRef(function Button(props: ButtonProps, ref?: any) {
  if(props.href) return <BaseButton ref={ref} component={Link} {...props} />
  return <BaseButton ref={ref} onClick={props.onClick} {...props} />;
});

export default Button;