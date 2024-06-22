import { ButtonProps } from "../type";

type productProps = {
  [key: string]: any;
};

export type CartButtonProps = ButtonProps & {
  product: productProps;

  stock: number;

  quantity?: number;

  variationId?: any;

  iconSize?: number;

  setShowCart?: (show: boolean) => void;
};
