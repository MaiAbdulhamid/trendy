import { Container } from "@/app/[locale]/components/Grids";
import ProductsSlider from "../../../components/ProductsSlider";
import { ModuleProp } from "../../types";

export default function Products({ record, title, widgetId }: ModuleProp) {
  return (
    <Container>
      <ProductsSlider
        widgetId={widgetId}
        title={title as any}
        products={record}
      />
    </Container>
  );
}
