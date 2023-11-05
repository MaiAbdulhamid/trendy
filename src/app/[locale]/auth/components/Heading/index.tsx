import React from "react";
import { HeadingWrapper } from "./style";
import { H3, P4 } from "../../../components/Typography";
import { useTranslations } from "next-intl";
import theme from "../../../utils/theme";
import { LogoIcon } from "../../../assets/svgs";
import { Flex } from "../../../components/Grids";
import URLS from "../../../utils/urls";
import Link from "next/link";

interface PropsTypes {
  title: string;
  subTitle?: string;
  appName?: boolean;
  extraPadding?: boolean
}

const Heading = ({title, subTitle, appName, extraPadding} : PropsTypes) => {
  const trans = useTranslations("Auth");

  return (
    <HeadingWrapper extraPadding={extraPadding}>
      <Flex direction="column" align="center" fullWidth >
        {appName && <Link href={URLS.home} ><LogoIcon /></Link>}
        <H3 textAlign="center">{trans(title)} {appName && <span>Trendy</span>}</H3>
        {subTitle &&       
          <P4 textAlign="center" weight="100" color={theme.colors.black[300]}>
            {trans(subTitle)}
          </P4>
        }
      </Flex>
    </HeadingWrapper>
  );
};

export default Heading;
