import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GlobalIcon, LogoIcon } from "../../../assets/svgs";
import Button from "../../Button/Button";
import { Flex } from "../../Grids";
import { StyledHeader } from "./style";
import Search from "./Search";
import Icons from "../Icons";
import Link from "next/link";
import URLS from "../../../utils/urls";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client"

export function TopNav() {
  const [opened, { toggle }] = useDisclosure(false);
  const locale = useLocale();
  const pathName = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    if (typeof window !== 'undefined') {
      window.location.href = `/${newLocale}/${pathName}`;
    }
  };
  return (
    <StyledHeader>
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <Link href={URLS.home}>
          <LogoIcon />
        </Link>
      </Group>

      <Search />

      <Flex align="center" gap="0.5rem">
        <Button noStyle onClick={toggleLanguage}>
          <GlobalIcon />
        </Button>
        <Icons />
      </Flex>
    </StyledHeader>
  );
}
