import React, { useCallback, useEffect, useState } from "react";
import { Hr, WrapperDropdown } from "./style";
import URLS from "../../../utils/urls";
import {
  AddressesIcon,
  OrdersIcon,
  ProfileIcon,
  SignOutIcon,
  UserWishlistIcon,
} from "../../../assets/svgs";
import theme from "../../../utils/theme";
import Link from "next/link";
import { Menu } from "@mantine/core";
import { Flex } from "@/app/[locale]/components/Grids";
import { P4 } from "@/app/[locale]/components/Typography";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import cache from "@mongez/cache";
import { authActions } from "@/app/[locale]/store";

const Sidebar = () => {
  const trans = useTranslations("Layout");
  const dispatch = useDispatch();
  const [token, setToken] = useState();

  const fetchToken = useCallback(() => {
    return cache.get("token");
  }, []);

  useEffect(() => {
    setToken(fetchToken());
  }, []);
  return (
    <Menu shadow="md" width={250}>
      <WrapperDropdown>
        <div className="bg">
          <Menu.Item component={Link} href={URLS.account.orders}>
            <Flex className="item" gap="0.5rem" justify="center">
              <div className="icon">
                <OrdersIcon color={theme.colors.primaryColor} />
              </div>
              <P4>{trans("orders")}</P4>
            </Flex>
          </Menu.Item>
          <Hr />
          <Menu.Item
            component={Link}
            href={URLS.account.addressBook}
            className="active"
          >
            <Flex className="item" gap="0.5rem" justify="center">
              <div className="icon">
                <AddressesIcon color={theme.colors.primaryColor} />
              </div>
              <P4>{trans("addresses")}</P4>
            </Flex>
          </Menu.Item>
          {token && (
            <>
              <Hr />
              <Menu.Item component={Link} href={URLS.account.wallet}>
                <Flex className="item" gap="0.5rem" justify="center">
                  <div className="icon">
                    <UserWishlistIcon />
                  </div>
                  <P4>{trans("wallet")}</P4>
                </Flex>
              </Menu.Item>
              <Hr />
              <Menu.Item component={Link} href={URLS.account.wishlist}>
                <Flex className="item" gap="0.5rem" justify="center">
                  <div className="icon">
                    <UserWishlistIcon />
                  </div>
                  <P4>{trans("wishlist")}</P4>
                </Flex>
              </Menu.Item>
              <Hr />
              <Menu.Item component={Link} href={URLS.account.editProfile}>
                <Flex className="item" gap="0.5rem" justify="center">
                  <div className="icon">
                    <ProfileIcon />
                  </div>
                  <P4>{trans("profile")}</P4>
                </Flex>
              </Menu.Item>
              <Hr />
              <Menu.Item
                component={Link}
                href={URLS.home}
                onClick={() => dispatch(authActions.logout())}
              >
                <Flex className="item" gap="0.5rem" justify="center">
                  <div className="icon">
                    <SignOutIcon />
                  </div>
                  <P4>{trans("logout")}</P4>
                </Flex>
              </Menu.Item>
            </>
          )}
        </div>
      </WrapperDropdown>
    </Menu>
  );
};

export default Sidebar;
