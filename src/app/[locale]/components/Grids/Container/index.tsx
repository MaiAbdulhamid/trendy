import { Container as MantineContainer, ContainerProps } from "@mantine/core";

export default function Container(props: ContainerProps) {
  return (
    <MantineContainer size={"xl"} style={{ position: "relative" }} {...props} />
  );
}