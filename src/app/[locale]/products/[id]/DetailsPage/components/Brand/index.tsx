import { Group } from "@mantine/core";
import Is from "@mongez/supportive-is";
import URLS from "../../../../../utils/urls";
import { BrandWrapper } from "./style";
import { RoundedShape } from "@/app/[locale]/components/shapes/Rounded";
import { P4 } from "@/app/[locale]/components/Typography";
import Link from "next/link";
import { Line } from "@/app/[locale]/components/shapes/Lines";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Brand({ product }: any) {
  const trans = useTranslations("Product");

  if (Is.empty(product.brand)) return null;
  return (
    <>
      <BrandWrapper fullWidth justify="space-between" align="center">
        <Link href={`${URLS.products}?brand_id[]=${product.brand.id}`}>
          <Group>
            <P4 weight="300" color="#AEABA4">
              {trans("brand")} :
            </P4>
            <P4>{product.brand.name}</P4>
          </Group>
        </Link>
      </BrandWrapper>

      <Line color="#3434344D"  />
    </>
  );
}
