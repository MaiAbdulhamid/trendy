import { useMediaQuery } from "@mantine/hooks";
import devices from "../../utils/devices";

export default function useBreakpoints() {
  const textReplacement = "@media screen and ";

  const hd = useMediaQuery(devices.hd.replace(textReplacement, ""));
  const xxLarge = useMediaQuery(devices.xxLarge.replace(textReplacement, ""));
  const xLarge = useMediaQuery(devices.xLarge.replace(textReplacement, ""));
  const large = useMediaQuery(devices.large.replace(textReplacement, ""));
  const medium = useMediaQuery(devices.medium.replace(textReplacement, ""));
  const small = useMediaQuery(devices.small.replace(textReplacement, ""));
  const xSmall = useMediaQuery(devices.xSmall.replace(textReplacement, ""));
  return {
    hd,
    xxLarge,
    xLarge,
    large,
    medium,
    small,
    xSmall,
  };
}
