import React from "react";
import { PromoContainer } from "./style";
import { Flex } from "../../../components/Grids";
import { P4 } from "../../../components/Typography";
import { useTranslations } from "next-intl";
import Button from "../../../components/Button/Button";
import theme from "../../../utils/theme";
import URLS from "../../../utils/urls";

const Promo = () => {
  const trans = useTranslations("Home");
  return (
    <PromoContainer>
      <Flex className="bg">
        <P4>
          {trans("dayPromo")}{" "}
          <span className="primary">{trans("discountPercentage")}</span>
        </P4>
        <Button color={theme.colors.white} variant="primary" href={URLS.deals}>
          {trans("deals")}
        </Button>
      </Flex>
    </PromoContainer>
  );
};

export default Promo;
