import { ProductDescriptionContainer } from "./style";
import { H7, P4 } from "@/app/[locale]/components/Typography";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import { useTranslations } from "next-intl";

export default function ProductDescription({ description }: any) {
  const trans = useTranslations('Product')
  return (
    <ProductDescriptionContainer>
      <H7>{trans("productDetails")}</H7>
      <P4 color="#343434CC">
        {description}
      </P4>
      <Line color="#3434344D"  />
    </ProductDescriptionContainer>
  );
}
