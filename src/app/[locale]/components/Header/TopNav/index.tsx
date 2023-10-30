import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  CartIcon,
  GlobalIcon,
  LogoIcon,
  UserIcon,
  WishListIcon,
} from "@/app/[locale]/assets/svgs";
import URLS from "@/app/[locale]/utils/urls";
import Button from "../../Button/Button";
import { Flex } from "../../Grids";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { StyledHeader } from "./style";
import theme from "@/app/[locale]/utils/theme";
import Search from "./Search";

const links = [
  { link: URLS.account.wishlist, text: <WishListIcon />, label: "wishlist" },
  { link: URLS.account.cart, text: <CartIcon />, label: "cart" },
  {
    link: URLS.account.dashboard,
    text: <UserIcon color={theme.colors.black[300]} size={39} />,
    label: "Account",
  },
];

export function TopNav() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.text}
    </Link>
  ));

  return (
    <StyledHeader>
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <LogoIcon />
      </Group>

      <Search />

      <Flex align="center" gap="0.5rem">
        <Button noStyle>
          <GlobalIcon />
        </Button>
        {items}
      </Flex>
    </StyledHeader>
  );
}
