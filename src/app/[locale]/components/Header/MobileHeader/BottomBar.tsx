import { Drawer } from "@mantine/core";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  DrawerWrapper,
  IconMenuWrapper,
  IconsBarContainer,
  IconWrapper,
} from "./style";
import URLS from "@/app/[locale]/utils/urls";
import { Small } from "../../Typography";
import { Flex } from "../../Grids";
import {
  OrdersIcon,
  HomeIcon,
  SignOutIcon,
  CartIcon,
  UserIcon,
  AddressesIcon,
  WishListIcon,
  MenuIcon,
  MainPageIcon,
} from "@/app/[locale]/assets/svgs";
import cache from "@mongez/cache";
import SearchInput from "../Search/Search";
import SelectInput from "../../Form/SelectInput";
import axiosInstance from "@/app/[locale]/lib/axios";
import { getCookie, setCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/store";
import Links from "../Menu/Links";

export default function BottomBar() {
  const trans = useTranslations("Layout");
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const [token, setToken] = useState();

  const fetchToken = useCallback(() => {
    return cache.get("token");
  }, []);

  useEffect(() => {
    setToken(fetchToken());
  }, []);

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
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        size="xl"
      >
        <DrawerWrapper>
          <Flex direction="column" className="menu--links">
            <SearchInput />
          </Flex>
          <Flex className="account--icons" fullWidth justify="space-between">
            <Link href={token ? URLS.account.editProfile : "/auth?mode=login"}>
              <IconMenuWrapper
                direction="column"
                align="center"
                justify="center"
              >
                <UserIcon size={14} color="white" />
                <Small color="white">{trans("profile")}</Small>
              </IconMenuWrapper>
            </Link>

            <Link href={URLS.account.addressBook}>
              <IconMenuWrapper
                direction="column"
                align="center"
                justify="center"
              >
                <AddressesIcon size={15} color="white" />
                <Small color="white">{trans("addresses")}</Small>
              </IconMenuWrapper>
            </Link>

            <Link href={URLS.account.wallet}>
              <IconMenuWrapper
                direction="column"
                align="center"
                justify="center"
              >
                <AddressesIcon size={15} color="white" />
                <Small color="white">{trans("wallet")}</Small>
              </IconMenuWrapper>
            </Link>
            {token && (
              <Link href={URLS.home}>
                <IconMenuWrapper
                  direction="column"
                  align="center"
                  justify="center"
                  onClick={() => dispatch(authActions.logout())}
                >
                  <SignOutIcon size={16} color="white" />
                  <Small color="white">{trans("logout")}</Small>
                </IconMenuWrapper>
              </Link>
            )}
          </Flex>
          <Flex direction="column" className="menu--links">
            <Links />
          </Flex>
          <Flex direction="column" className="menu--links">
            <SelectInput
              name="country"
              label="country"
              data={countries}
              onChange={onChangeHandler}
              defaultValue={getCookie("country")}
            />
          </Flex>
        </DrawerWrapper>
      </Drawer>
      <IconsBarContainer fullWidth justify="space-between">
        <IconWrapper direction="column" justify="center" align="center">
          <Link href={URLS.home}>
            <MainPageIcon color="black" />
            <Small>{trans("home")}</Small>
          </Link>
        </IconWrapper>
        <IconWrapper direction="column" justify="center" align="center">
          <Link href={URLS.account.orders}>
            <OrdersIcon color="black" />
            <Small>{trans("orders")}</Small>
          </Link>
        </IconWrapper>
        {token && (
          <IconWrapper direction="column" justify="center" align="center">
            <Link href={URLS.account.wishlist}>
              <WishListIcon color="black" />
              <Small>{trans("wishlist")}</Small>
            </Link>
          </IconWrapper>
        )}
        <IconWrapper direction="column" justify="center" align="center">
          <Link href={URLS.account.cart}>
            <CartIcon size={24} />
            <Small>{trans("cart")}</Small>
          </Link>
        </IconWrapper>
        <IconWrapper
          direction="column"
          justify="center"
          align="center"
          onClick={() => setOpened(true)}
        >
          <MenuIcon />
          <Small>{trans("menu")}</Small>
        </IconWrapper>
      </IconsBarContainer>
    </>
  );
}
