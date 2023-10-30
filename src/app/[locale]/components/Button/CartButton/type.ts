import { ButtonProps } from "../type";

type productProps = {
    [key: string]: any
}

export type CartButtonProps = ButtonProps & {
    product: productProps,

    quantity?: string | number

    options?: any

    iconSize?: number
}