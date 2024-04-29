import { atom } from "@mongez/react-atom";

const variationsAtom = atom({
  key: "variationId",
  default: {
    variationId: null as any
  },
});

export default variationsAtom;