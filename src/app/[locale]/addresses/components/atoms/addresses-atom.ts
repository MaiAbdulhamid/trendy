import { atom } from "@mongez/react-atom";

export const addressesAtom = atom({
  key: "addresses",
  default: {
    records: [],
  },
});