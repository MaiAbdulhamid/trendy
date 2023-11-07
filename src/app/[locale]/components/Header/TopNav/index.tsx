import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  GlobalIcon,
  LogoIcon,
} from "../../../assets/svgs";
import Button from "../../Button/Button";
import { Flex } from "../../Grids";
import { StyledHeader } from "./style";
import theme from "../../../utils/theme";
import Search from "./Search";
import Icons from "../Icons";
import Link from "next/link";
import URLS from "../../../utils/urls";

export function TopNav() {
  const [opened, { toggle }] = useDisclosure(false);

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
        <Button noStyle>
          <GlobalIcon />
        </Button>
        <Icons />
      </Flex>
    </StyledHeader>
  );
}
