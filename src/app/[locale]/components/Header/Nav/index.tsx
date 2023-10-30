"use client";
import URLS from "@/app/[locale]/utils/urls";
import { Flex } from "../../Grids";
import Link from "next/link";
import { StyledNav } from "./style";
import theme from "@/app/[locale]/utils/theme";
import axiosInstance from "@/app/[locale]/lib/axios";
import { useEffect, useState } from "react";
import { HoverCard } from "@mantine/core";
import NavHoverCard from "./NavHoverCard";

export function Nav() {
  const [categories, setCategories] = useState<any>([]);
  const [subCategories, setSubCategories] = useState<any>([]);

  const fetchCategories = async () => {
    try {
      const response: any = await axiosInstance.get("categories");
      setCategories(response.data.data.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchSubCategories = async (id: string) => {
    const filteredSubCategories = categories.find(
      (category: any) => category.id === id
    );
    setSubCategories(filteredSubCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, [setCategories]);

  const items = categories?.map((category: any) => (
    <HoverCard.Target>
      <Link
        href={URLS.category.dashboard}
        onMouseOver={() => fetchSubCategories(category.id)}
      >
        {category.name}
      </Link>
    </HoverCard.Target>
  ));
  return (
    <StyledNav>
      <HoverCard
        position="bottom"
        withinPortal
      >
        <Flex align="center" gap="1rem">
          {items}
        </Flex>
        <NavHoverCard subCategories={subCategories} />
      </HoverCard>
    </StyledNav>
  );
}
