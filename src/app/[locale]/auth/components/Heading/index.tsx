import React from "react";
import { HeadingWrapper } from "./style";
import { H3, P4 } from "../../../components/Typography";
import { useTranslations } from "next-intl";
import theme from "../../../utils/theme";

interface PropsTypes {
  title: string;
  subTitle?: string;
  appName?: boolean
}

const Heading = ({title, subTitle, appName} : PropsTypes) => {
  const trans = useTranslations("Auth");

  return (
    <HeadingWrapper>
      <H3 textAlign="center">{trans(title)} {appName && <span>Trendy</span>}</H3>
      {subTitle &&       
        <P4 textAlign="center" weight="400" color={theme.colors.black[300]}>
          {trans(subTitle)}
        </P4>
      }
    </HeadingWrapper>
  );
};

export default Heading;
