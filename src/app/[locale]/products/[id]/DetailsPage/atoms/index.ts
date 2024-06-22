import { atom } from "@mongez/react-atom";

const variationsAtom = atom({
  key: "variationId",
  default: {
    variationId: null as any,
    option: null as any,
  },
});

export default variationsAtom;

export const allVariationsAtom = atom({
  key: "allVariations",
  default: {
    allVariations: [] as any,
  },
});
