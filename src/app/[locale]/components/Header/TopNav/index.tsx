import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  GlobalIcon,
  LogoIcon,
} from "../../../assets/svgs";
import Button from "../../Button/Button";
import { Flex } from "../../Grids";
import { StyledHeader } from "./style";
import Search from "./Search";
import Icons from "../Icons";
import Link from "next/link";
import URLS from "../../../utils/urls";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import {useLocale} from 'next-intl';

export function TopNav() {
  const [opened, { toggle }] = useDisclosure(false);
  const router = useRouter();
  const defaultLocale = useLocale();

  const langHandler = () => {
    console.log(defaultLocale)
    // if(getCookie('NEXT_LOCALE') === 'ar'){
    //   setCookie('NEXT_LOCALE', 'en');
    //   router.push('/')
    // }
    // if(getCookie('NEXT_LOCALE') === 'en'){
    //   setCookie('NEXT_LOCALE', 'ar');
    //   router.push('/ar')
    // }
  }
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
        <Button noStyle onClick={langHandler}>
          <GlobalIcon />
        </Button>
        <Icons />
      </Flex>
    </StyledHeader>
  );
}
