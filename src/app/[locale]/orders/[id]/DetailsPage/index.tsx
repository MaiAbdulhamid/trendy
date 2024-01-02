import { Grid } from "@mantine/core";
import { Padding, PageContainer } from "./style";
import { Col, Flex } from "@/app/[locale]/components/Grids";
import WishlistButton from "@/app/[locale]/components/Button/WishlistButton";
import URLS from "@/app/[locale]/utils/urls";
import useBreakpoints from "@/app/[locale]/shared/hooks/useBreakpoints";
import { H3, H4 } from "@/app/[locale]/components/Typography";
import ProductsSlider from "@/app/[locale]/components/ProductsSlider";
import Breadcrumb from "@/app/[locale]/components/Breadcrumb";
import OrderSummary from "./components/OrderSummary";
import Details from "./components/Details";
import { useTranslations } from "next-intl";

function DetailsPage({ order }: any) {
  const { medium } = useBreakpoints();
  const trans = useTranslations('Orders');

  if (!order) return null;

  return (
    <>
      <PageContainer>
        <Padding>
          <H3>{trans('orderHistory')}</H3>
        </Padding>
        <Grid>
          <Col span={{ base: 12, md: 8 }}>
            <Details order={order} />
          </Col>
          <Col span={{ base: 12, md: 4 }}>
            <OrderSummary orderSummary={order.order_summary} />
          </Col>
        </Grid>
      </PageContainer>
    </>
  );
}

export default DetailsPage;
