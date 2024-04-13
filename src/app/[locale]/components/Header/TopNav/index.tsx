import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GlobalIcon, LogoIcon } from "../../../assets/svgs";
import Button from "../../Button/Button";
import { Flex } from "../../Grids";
import { CountrySelectWrapper, StyledHeader } from "./style";
import Search from "../Search/Search";
import Icons from "../Icons";
import Link from "next/link";
import URLS from "../../../utils/urls";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import axiosInstance from "@/app/[locale]/lib/axios";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import SelectInput from "../../Form/SelectInput";

export function TopNav() {
  const [opened, { toggle }] = useDisclosure(false);
  const locale = useLocale();
  const pathName = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    if (typeof window !== "undefined") {
      window.location.href = `/${newLocale}/${pathName}`;
    }
  };
  const [countries, setCountries] = useState<any>([]);

  const getCountries = async () => {
    try {
      const response: any = await axiosInstance.get("countries");
      const filteredCountries = response.data.data.data.map((c: any) => {
        return {
          label: c.name,
          value: String(c.id),
        };
      });
      setCountries(filteredCountries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const onChangeHandler = (e: any) => {
    console.log(e);
    setCookie("country", e);
    // close();
    window.location.reload();
  };
  return (
    <StyledHeader>
      <Group>
        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <Link href={URLS.home}>
          <LogoIcon />
        </Link>
      </Group>
      
      <CountrySelectWrapper>
        <SelectInput
          name="country"
          label="country"
          data={countries}
          onChange={onChangeHandler}
          defaultValue={getCookie('country')}
        />
      </CountrySelectWrapper>

      <Search />

      <Flex align="center" gap="0.5rem">
        <Button noStyle onClick={toggleLanguage}>
          <GlobalIcon />
        </Button>
        <Icons />
      </Flex>
    </StyledHeader>
  );
}
