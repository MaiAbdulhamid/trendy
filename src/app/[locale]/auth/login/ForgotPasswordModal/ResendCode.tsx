import Button from "../../../components/Button/Button";
import { useTranslations } from "next-intl";
import React from "react";
import theme from "../../../utils/theme";
import { Flex } from "../../../components/Grids";
import { P4 } from "../../../components/Typography";

const ResendCode = () => {
  const trans = useTranslations("Auth");

  return (
    <Flex gap="0.5rem" justify="center" fullWidth align="center">
      <P4 textAlign="center" weight="100">
        {trans("notReceivedCode")}
      </P4>
      <P4>
        <Button noStyle color={theme.colors.primaryColor}>
          {trans("resendCode")}
        </Button>
      </P4>
    </Flex>
  );
};

export default ResendCode;
