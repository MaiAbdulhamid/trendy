import { atom } from "@mongez/react-atom";

export const cartItemAtom = atom({
  name: "cartItem",
  default: {
    options: [],
    quantity: 1,
    notes: "",
  },
});