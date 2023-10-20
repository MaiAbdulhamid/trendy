import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import '@mantine/notifications/styles.css';

import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  MantineProvider,
  ColorSchemeScript,
  DirectionProvider,
} from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import { Container } from "@mantine/core";
import { Grid } from "@mantine/core";
import SideImage from "./components/SideImage";
import Col from "../components/Grids/Grid";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import RootStyleRegistry from "./RootStyleRegistry";
import Body from "./Body";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
const universeFont = localFont({
  src: [
    {
      path: "../assets/fonts/UniversLTStdBold.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/UniversLTStd.otf",
      weight: "300",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_NAME,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <DirectionProvider detectDirection>
      <html lang={locale} dir={locale === "en" ? "ltr" : "rtl" }>
        <head>
          <ColorSchemeScript defaultColorScheme="auto" />
        </head>
        <Body className={universeFont.className}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <MantineProvider>
              <Notifications position="top-left" autoClose={5000}/>
              <RootStyleRegistry>
              <main>
                <Container fluid>
                  <Grid gutter={{ base: 3, xs: "md", md: "xl", xl: 50 }}>
                    <Col span={{ base: 12, md: 6 }}>
                      <SideImage />
                    </Col>
                    <Col span={{ base: 12, md: 6 }}>{children}</Col>
                  </Grid>
                </Container>
              </main>
              </RootStyleRegistry>
            </MantineProvider>
          </NextIntlClientProvider>
        </Body>
      </html>
    </DirectionProvider>
  );
}

