import { useTranslations } from "next-intl";
import { SuccessIcon } from "../../assets/svgs";
import { Flex } from "../../components/Grids";
import { H4, P1 } from "../../components/Typography";
import theme from "../../utils/theme";
import { Wrapper } from "./style";

const ThankYouPage = () => {
  const trans = useTranslations("Checkout");
  return (
    <Wrapper>
      <Flex direction="column" justify="center" align="center" fullWidth>
        <SuccessIcon />
        <H4 color={theme.colors.success[200]}>{trans("paymentSuccess")}!</H4>
        <P1 color={theme.colors.black[400]}>{trans("hearFromUs")}</P1>
      </Flex>
    </Wrapper>
  );
};

export default ThankYouPage;
