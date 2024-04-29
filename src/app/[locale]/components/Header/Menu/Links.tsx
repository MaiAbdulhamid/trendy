import { Menu } from "@mantine/core";
import Is from "@mongez/supportive-is";
import URLS from "@/app/[locale]/utils/urls";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/[locale]/lib/axios";
import { Flex } from "../../Grids";
import { P4 } from "../../Typography";

export default function Links() {
  const trans = useTranslations("Layout");
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
  return (
    <>
      {/* <Link href={URLS.home}>{trans("home")}</Link> */}

      {categories.map((category: any) =>
        !Is.empty(category.section) ? (
          <Menu key={category.id} shadow="md" width={200} trigger="hover">
            <Menu.Target>
              <Link href="#">{category.name}</Link>
            </Menu.Target>

            <Menu.Dropdown>
              {category.section.map((item: any) => (
                <Menu.Item
                  key={item.id}
                  component={Link}
                  href={`${URLS.products}?category_id[]=${item.id}`}
                >
                  <Flex direction="column" gap="0.5rem">
                    <P4>{item.name}</P4>
                    {item.sub_categories.map((subCategory: any) => (
                      <Link
                        key={subCategory.id}
                        href={`${URLS.products}?category_id[]=${subCategory.id}`}
                      >
                        {subCategory.name}
                      </Link>
                    ))}
                  </Flex>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        ) : Is.empty(category.section) ? (
          <Link href={`${URLS.products}?category_id[]=${category.id}`}>
            {category.name}
          </Link>
        ) : (
          <></>
        )
      )}
    </>
  );
}
