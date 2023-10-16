import React from "react";
import { H3, P4, Small } from "../../components/Typography";
import { HeadingWrapper } from "./style";
import { useTranslations } from "next-intl";
import theme from "../../utils/theme";

const Heading = () => {
  const trans = useTranslations("Auth");

  return (
    <HeadingWrapper>
      <H3 textAlign="center">
        {trans("helloAgain")} <span>Trendy</span>
      </H3>
      <P4 textAlign="center" weight="400" color={theme.colors.black[300]}>{trans('welcomeLogin')}</P4>
    </HeadingWrapper>
  );
};

export default Heading;
