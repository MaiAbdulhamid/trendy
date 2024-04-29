import Button from "../Button/Button";
import { H5 } from "../Typography";
import { SectionTitleStyled } from "./style";
import { SectionTitleProps } from "./type";
import { Grid } from "@mantine/core";
import { Col, Flex } from "../Grids";
import theme from "../../utils/theme";
import { useTranslations } from "next-intl";

export default function SectionTitle(props: SectionTitleProps) {
  const { title, to, buttonText, enableViewAll, color } = props;
  const trans = useTranslations("Home");
  return (
    <SectionTitleStyled className="section--title">
      <Flex fullWidth justify="space-between">
        <H5 color={color ?? theme.colors.primaryColor}>{title}</H5>

        {enableViewAll && (
          <Button variant="outline" radius={100} href={to} color={color}>
            {buttonText || trans("viewAll")}
          </Button>
        )}
      </Flex>
    </SectionTitleStyled>
  );
}
