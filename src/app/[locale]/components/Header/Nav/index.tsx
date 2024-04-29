"use client";
import URLS from "../../../utils/urls";
import { Flex } from "../../Grids";
import Link from "next/link";
import { PolygonWrapper, StyledNav } from "./style";
import axiosInstance from "../../../lib/axios";
import { useEffect, useState } from "react";
import { HoverCard } from "@mantine/core";
import NavHoverCard from "./NavHoverCard";
import PolygonIcon from "../../../assets/svgs/PolygonIcon";
import Is from "@mongez/supportive-is";

export function Nav() {
  const [categories, setCategories] = useState<any>([]);
  const [subCategories, setSubCategories] = useState<any>([]);
  const [style, setStyle] = useState({ display: "none" });

  const fetchCategories = async () => {
    // setStyle({ display: "block" })
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
    <HoverCard.Target key={category.id}>
      <Link
        href={URLS.products + "?category_id[]=" + category.id}
        onMouseEnter={() => fetchSubCategories(category.id)}
        // onMouseOver={(e) => {
        //   setStyle({ display: "block" });
        // }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        {category.name}
      </Link>
    </HoverCard.Target>
  ));
  return (
    <StyledNav>
      <HoverCard position="bottom" withinPortal>
        <Flex align="center" gap="1rem">
          {items}
        </Flex>
        <NavHoverCard subCategories={subCategories} />
      </HoverCard>
    </StyledNav>
  );
}
