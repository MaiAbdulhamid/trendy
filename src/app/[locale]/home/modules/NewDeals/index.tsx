import ProductsSlider from "@/app/[locale]/components/ProductsSlider";
import { ModuleProp } from "../../types";
import { NewDealsContainer } from "./style";
import SectionTitle from "@/app/[locale]/components/SectionTitle";
import theme from "@/app/[locale]/utils/theme";
import URLS from "@/app/[locale]/utils/urls";
import { Flex } from "@/app/[locale]/components/Grids";
import { H2, H3, P1, H1 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";

export default function NewDeals({ record, title, widgetId, name, discount }: ModuleProp) {
  const trans = useTranslations('Home')
  return (
    <NewDealsContainer>
        <SectionTitle
        to={`${URLS.category.dashboard}?widget_id=${widgetId}`}
          title={title}
          enableViewAll={true}
          color={theme.colors.black[300]}
        />
      <div className="bg">
        <Flex className="wrapper">
          <Flex className="details" direction="column" justify="center">
            <H3 color={theme.colors.white}>{name}</H3>
            <H1 color="#FBBC05" > SALE UP TO <span>{discount}</span>% OFF</H1>
            <P1 color={theme.colors.white} weight="400">{trans('newDeals')}</P1>
          </Flex>
          <ProductsSlider
            products={record}
            color={theme.colors.white}
          />
        </Flex>
      </div>
    </NewDealsContainer>
  );
}
