import { atom } from "@mongez/react-atom";

export const cartItemAtom = atom({
  key: "cartItem",
  default: {
    options: [],
    quantity: 1,
    notes: "",
  },
});