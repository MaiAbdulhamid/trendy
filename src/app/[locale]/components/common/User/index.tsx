"use client";
import { Menu } from "@mantine/core";
import { Flex } from "../../Grids";
import { P4 } from "../../Typography";
import { Hr, Wrapper, WrapperDropdown } from "./style";
import URLS from "../../../utils/urls";
import {
  AddressesIcon,
  OrdersIcon,
  ProfileIcon,
  SignOutIcon,
  UserIcon,
  UserWishlistIcon,
} from "../../../assets/svgs";
import theme from "../../../utils/theme";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { authActions } from "@/app/[locale]/store";
import Button from "../../Button/Button";
import { useCallback, useEffect, useState } from "react";
import cache from "@mongez/cache";
import SelectInput from "../../Form/SelectInput";
import axiosInstance from "@/app/[locale]/lib/axios";
import { setCookie } from "cookies-next";

export default function User() {
  const trans = useTranslations("Layout");
  const dispatch = useDispatch();
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
    console.log(e)
    setCookie("country", e);
    // close();
    window.location.reload();
  }
  return (
    <>
      {!token ? (
        <Wrapper>
          <Button noStyle href={`/auth${URLS.auth.login}`}>
            <UserIcon size={40} color={theme.colors.black[300]} />
          </Button>
        </Wrapper>
      ) : (
        <Wrapper>
          <Menu shadow="md" width={250}>
            <Menu.Target>
              <Button noStyle>
                <UserIcon size={40} color={theme.colors.black[300]} />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
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
                  <Menu.Item component={Link} href={URLS.account.addressBook}>
                    <Flex className="item" gap="0.5rem" justify="center">
                      <div className="icon">
                        <AddressesIcon color={theme.colors.primaryColor} />
                      </div>
                      <P4>{trans("addresses")}</P4>
                    </Flex>
                  </Menu.Item>
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
                  {/* <Menu.Item component={`div`}>
                    <Flex className="item" gap="0.5rem" justify="center">
                      <div className="icon">
                        <SelectInput
                          name="country"
                          label="country"
                          data={countries}
                          // defaultValue={"3"}
                          onChange={onChangeHandler}
                          clearable
                        />
                      </div>
                    </Flex>
                  </Menu.Item>
                  <Hr /> */}
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
                </div>
              </WrapperDropdown>
            </Menu.Dropdown>
          </Menu>
        </Wrapper>
      )}
    </>
  );
}
