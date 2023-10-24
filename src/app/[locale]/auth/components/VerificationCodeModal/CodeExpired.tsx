import theme from "../../../utils/theme";
import { Flex } from "../../../components/Grids";
import { P4 } from "../../../components/Typography";
import { useTranslations } from "next-intl";
import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/store";

const CodeExpired = ({resetTimer}: any) => {
  const trans = useTranslations("Auth");
  const [remainingTime, setRemainingTime] = React.useState(60);

// start counter
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    if (remainingTime <= 0) {
      resetTimer(true)
    }

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  if (remainingTime === 0) return null;

  return (
    <Flex gap="0.5rem" justify="center" fullWidth align="center">
      <P4 textAlign="center" weight="100">
        {trans("codeExpire")}
      </P4>
      <P4 color={theme.colors.primaryColor}>00:{remainingTime}</P4>
    </Flex>
  );
};

export default CodeExpired;
