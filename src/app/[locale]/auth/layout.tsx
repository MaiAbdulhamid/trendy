import "./globals.css";

import { Grid } from "@mantine/core";
import SideImage from "./components/SideImage";
import Col from "../components/Grids/Grid";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid gutter={{ base: 3, xs: "md", md: "xl", xl: 50 }}>
      <Col span={{ base: 12, md: 6 }}>
        <SideImage />
      </Col>
      <Col span={{ base: 12, md: 6 }}>{children}</Col>
    </Grid>
  );
}
