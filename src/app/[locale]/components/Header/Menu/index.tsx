import { Group } from "@mantine/core";

import Links from "./Links";
import { MenuContainer } from "./style";

export default function Menu() {
  return (
    <>
      <MenuContainer>
        <Group position="center" spacing={35}>
          <Links />
        </Group>
      </MenuContainer>
    </>
  );
}
