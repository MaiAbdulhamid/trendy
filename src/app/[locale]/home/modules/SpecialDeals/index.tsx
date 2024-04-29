import { ModuleProp } from "../../types";
import SpecialDealsSlider from "../../../components/SpecialDealsSlider";

export default function SpecialDeals({ record, title, widgetId }: ModuleProp) {
  return (
    <>
      <SpecialDealsSlider
        widgetId={widgetId}
        title={title as any}
        products={record}
      />
    </>
  );
}
