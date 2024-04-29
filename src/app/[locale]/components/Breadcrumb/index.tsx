"use client";
import { List, Skeleton } from "@mantine/core";
import Is from "@mongez/supportive-is";
import { Flex } from "../Grids";
import { P4 } from "../Typography";
import { BreadcrumbContainer } from "./style";
import Button from "../Button/Button";
import URLS from "../../utils/urls";
import breadcrumbAtom from "../../shared/atoms/breadcrumb-atom";
import Link from "next/link";
import { BreadcrumbIcon } from "../../assets/svgs";
import { useTranslations } from "next-intl";

export default function Breadcrumb() {
  const trans = useTranslations('Breadcrumb')
  let { items, pageIsLoaded } = breadcrumbAtom.useValue();

  return (
    <>
      <BreadcrumbContainer>
        <List className="breadcrumb--list">
          <List.Item>
            <Link href={URLS.home}>
              <Flex align="center" justify="center">
                <P4>{trans("home")} </P4>
                <BreadcrumbIcon />
              </Flex>
            </Link>
          </List.Item>
          {Is.empty(items)
            ? !pageIsLoaded && (
                <List.Item>
                  <Skeleton width={70} height={12} radius="xl" />
                </List.Item>
              )
            : items.map((item: any) => (
                <List.Item key={item.id}>
                  <Button noStyle href={item.link}>
                    <P4>{item.text}</P4>
                  </Button>
                </List.Item>
              ))}
        </List>
      </BreadcrumbContainer>
    </>
  );
}
