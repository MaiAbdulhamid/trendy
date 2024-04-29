import React from "react";
import { HoverCard } from "@mantine/core";
import { H3, P4 } from "../../Typography";
import Link from "next/link";
import { HoverDropdown } from "./style";
import { Flex } from "../../Grids";
import URLS from "../../../utils/urls";
import Is from "@mongez/supportive-is";

const NavHoverCard = ({ subCategories }: any) => {
  if (Is.empty(subCategories.section)) return null;

  return (
    <HoverCard.Dropdown
      style={{
        overflow: "hidden",
        width: "100%",
        border: "0",
        padding: "0",
        borderRadius: "0",
      }}
    >
      <HoverDropdown>
        <Flex className="section" fullWidth gap="2rem">
          {subCategories.section?.map((section: any) => (
            <Flex key={section.id} direction="column">
              <H3>{section.name}</H3>
              {section.sub_categories.map((subCategory: any) => (
                <Link
                  key={subCategories.id}
                  href={URLS.products + "?category_id[]=" + subCategory.id}
                >
                  <P4>{subCategory.name}</P4>
                </Link>
              ))}
            </Flex>
          ))}
        </Flex>
      </HoverDropdown>
    </HoverCard.Dropdown>
  );
};

export default NavHoverCard;
