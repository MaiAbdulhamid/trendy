import React from "react";
import { H3 } from "../../components/Typography";
import { HeadingWrapper } from "./style";
import { useTranslations } from "next-intl";

const Heading = () => {
  const trans = useTranslations("Auth");

  return (
    <HeadingWrapper>
      <H3 textAlign="center">
        {trans("createAnewAccount")} <span>Trendy</span>
      </H3>
    </HeadingWrapper>
  );
};

export default Heading;
