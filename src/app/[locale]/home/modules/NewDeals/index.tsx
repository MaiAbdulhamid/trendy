import ProductsSlider from "@/app/[locale]/components/ProductsSlider";
import { ModuleProp } from "../../types";
import { NewDealsContainer } from "./style";

export default function NewDeals({ record, title, widgetId }: ModuleProp) {
  return (
    <NewDealsContainer>
      <ProductsSlider
        widgetId={widgetId}
        title={title as any}
        products={record}
      />
    </NewDealsContainer>
  );
}
