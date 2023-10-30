import React from "react";
import { PromoContainer } from "./style";
import { Flex } from "@/app/[locale]/components/Grids";
import { P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import Button from "@/app/[locale]/components/Button/Button";
import theme from "@/app/[locale]/utils/theme";

const Promo = () => {
  const trans = useTranslations("Home");
  return (
    <PromoContainer>
      <Flex className="bg">
        <P4>
          {trans("dayPromo")}{" "}
          <span className="primary">{trans("discountPercentage")}</span>
        </P4>
        <Button color={theme.colors.white} variant="primary">
          3:00:00
        </Button>
      </Flex>
    </PromoContainer>
  );
};

export default Promo;
