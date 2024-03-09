import { homeAtom } from "src/atoms/home-atom";

export function AtomScript() {
  homeAtom.onChange((value) => {
    // console.log("Changed", Object.keys(globalThis), globalThis.__atoms__);
  });

  return <script id="__atoms__" />;
}
