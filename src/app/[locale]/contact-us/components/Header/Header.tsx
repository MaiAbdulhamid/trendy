import { H2, P2 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import React from "react";

const Header = () => {
  const trans = useTranslations("ContactUs");
  return (
    <>
      <H2>{trans("title")}</H2>
      <P2>{trans("subTitle")}</P2>
    </>
  );
};

export default Header;
