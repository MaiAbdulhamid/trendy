import ProductsSlider from "../../../components/ProductsSlider";
import { ModuleProp } from "../../types";

export default function Products({ record, title, widgetId }: ModuleProp) {
  return (
    <>
      <ProductsSlider
        widgetId={widgetId}
        title={title as any}
        products={record}
      />
    </>
  );
}
