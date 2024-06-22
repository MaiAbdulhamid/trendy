import { Grid } from "@mantine/core";
import Attachments from "./components/Attachments";
import Brand from "./components/Brand";
import ProductDescription from "./components/ProductDescription";
import ProductOptions from "./components/ProductOptions";
import ProductPrice from "./components/ProductPrice";
import ProductThumb from "./components/ProductThumb";
import { PageContainer } from "./style";
import { Col, Flex } from "@/app/[locale]/components/Grids";
import WishlistButton from "@/app/[locale]/components/Button/WishlistButton";
import URLS from "@/app/[locale]/utils/urls";
import useBreadcrumb from "@/app/[locale]/shared/hooks/useBreadcrumb";
import useBreakpoints from "@/app/[locale]/shared/hooks/useBreakpoints";
import { H4 } from "@/app/[locale]/components/Typography";
import ProductsSlider from "@/app/[locale]/components/ProductsSlider";
import Breadcrumb from "@/app/[locale]/components/Breadcrumb";
import ProductQuantity from "./components/ProductQuantity";
import variationsAtom from "./atoms";

function DetailsPage({ product }: any) {
  const { medium } = useBreakpoints();
  const value = variationsAtom.useValue();

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

            <ProductQuantity
              product={product}
              variationId={value.variationId}
              option={value.option}
            />

            <Attachments product={product} />
          </Col>
          {!medium && (
            <Col span={12}>
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
