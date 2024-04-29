import { Grid } from "@mantine/core";
import { Padding, PageContainer } from "./style";
import { Col } from "@/app/[locale]/components/Grids";
import { H3 } from "@/app/[locale]/components/Typography";
import OrderSummary from "./components/OrderSummary";
import Details from "./components/Details";
import { useTranslations } from "next-intl";

function DetailsPage({ order }: any) {
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
