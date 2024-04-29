import { ButtonProps } from "../type";

type productProps = {
  [key: string]: any;
};

export type CartButtonProps = ButtonProps & {
  product: productProps;

  quantity?: string | number;

  variationId?: any;

  iconSize?: number;

  setShowCart?: any
};
