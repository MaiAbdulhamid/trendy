import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "swiper/css";
import "./globals.css";
import "@mantine/spotlight/styles.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  MantineProvider,
  ColorSchemeScript,
  DirectionProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Container } from "@mantine/core";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import RootStyleRegistry from "./RootStyleRegistry";
import Body from "./Body";
import ClientSetup from "./components/ClientSetup";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}
const universeFont = localFont({
  src: [
    {
      path: "./assets/fonts/UniversLTStdBold.otf",
      weight: "700",
    },
    {
      path: "./assets/fonts/UniversLTStd.otf",
      weight: "300",
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
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <Body className={universeFont.className}>
        <DirectionProvider>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone="Europe/Vienna"
            now={new Date()}
          >
            <MantineProvider defaultColorScheme="light">
              <Notifications position="top-left" autoClose={5000} />
              <ClientSetup />
              <RootStyleRegistry>
                <main>
                  <Container fluid>{children}</Container>
                </main>
              </RootStyleRegistry>
            </MantineProvider>
          </NextIntlClientProvider>
        </DirectionProvider>
      </Body>
    </html>
  );
}
