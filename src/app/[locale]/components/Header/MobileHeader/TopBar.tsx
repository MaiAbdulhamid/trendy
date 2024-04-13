import { TopBarContainer } from "./style";
import URLS from "@/app/[locale]/utils/urls";
import Link from "next/link";
import { GlobalIcon, LogoIcon } from "@/app/[locale]/assets/svgs";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { Flex } from "../../Grids";
import Button from "../../Button/Button";

export default function TopBar() {
  const locale = useLocale();
  const pathName = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    if (typeof window !== "undefined") {
      window.location.href = `/${newLocale}/${pathName}`;
    }
  };
  return (
    <TopBarContainer justify="space-between" align="center" fullWidth>
      <Link href={URLS.home}>
        <LogoIcon />
      </Link>
      <Flex align="center" gap="0.5rem">
        <Button noStyle onClick={toggleLanguage}>
          <GlobalIcon />
        </Button>
      </Flex>
    </TopBarContainer>
  );
}
