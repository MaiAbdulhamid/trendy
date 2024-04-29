import { atom } from "@mongez/react-atom";

const breadcrumbAtom = atom({
  key: "breadcrumb",
  default: {
    items: [],
    pageIsLoaded: false
  },
});

export default breadcrumbAtom;
