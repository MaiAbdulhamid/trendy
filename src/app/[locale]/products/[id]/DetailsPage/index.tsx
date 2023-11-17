import { Badge, Grid, Group } from "@mantine/core";
import Attachments from "./components/Attachments";
import Brand from "./components/Brand";
import ProductDescription from "./components/ProductDescription";
import ProductOptions from "./components/ProductOptions";
import ProductPrice from "./components/ProductPrice";
import ProductQuantity from "./components/ProductQuantity";
import ProductThumb from "./components/ProductThumb";
import { BadgeContainer, PageContainer } from "./style";
import { Col, Flex } from "@/app/[locale]/components/Grids";
import WishlistButton from "@/app/[locale]/components/Button/WishlistButton";
import EnNumber from "@/app/[locale]/utils/EnNumber";
import { useTranslations } from "next-intl";
import URLS from "@/app/[locale]/utils/urls";
import useBreadcrumb from "@/app/[locale]/shared/hooks/useBreadcrumb";
import useBreakpoints from "@/app/[locale]/shared/hooks/useBreakpoints";
import StarIcon from "@/app/[locale]/assets/svgs/StarIcon";
import { H4, P4 } from "@/app/[locale]/components/Typography";
import ProductsSlider from "@/app/[locale]/components/ProductsSlider";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/[locale]/lib/axios";
import { useParams } from "next/navigation";
import Breadcrumb from "@/app/[locale]/components/Breadcrumb";

function DetailsPage({ product }: any) {
  const { medium } = useBreakpoints();

  useBreadcrumb({
    text: product?.name,
    link: URLS.viewProduct(product),
  });

  if (!product) return null;

  return (
    <>
      <PageContainer>
        <Grid>
          <Col span={{ base: 12, md: 6 }}>
            <Breadcrumb />
          </Col>
        </Grid>
        <Grid>
          {medium && (
            <Col span={{ base: 12, md: 6 }}>
              <ProductThumb product={product} />
            </Col>
          )}
          <Col span={{ base: 12, md: 6 }}>
            <Flex align="center" justify="space-between" fullWidth>
              <H4 className="heading--title">{product?.name}</H4>

              <WishlistButton noStyle product={product} />
            </Flex>

            <Brand product={product} />

            <ProductPrice product={product} />

            <ProductDescription description={product?.description} />

            <ProductOptions product={product} />

            {/* <ProductQuantity product={product} /> */}

            <Attachments product={product} />
          </Col>
          {!medium && (
            <Col span={6}>
              <ProductThumb product={product} />
            </Col>
          )}

          <Col>
            <ProductsSlider
              enableViewAllButton={false}
              title={product?.widget.title}
              products={product?.widget.widgetData}
            />
          </Col>
        </Grid>
      </PageContainer>
    </>
  );
}

export default DetailsPage;
