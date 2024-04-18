import useBreakpoints from "../../shared/hooks/useBreakpoints";
import DesktopProductsSlider from "./DesktopProductsSlider";
import MobileProductsSlider from "./MobileProductsSlider";
import { ProductsSliderProps } from "./type";

export default function ProductsSlider(props: ProductsSliderProps) {
  const { large } = useBreakpoints();

  return <>{large ? <DesktopProductsSlider {...props} /> : <MobileProductsSlider  {...props} />}</>;
}