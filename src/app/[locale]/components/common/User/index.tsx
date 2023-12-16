import { Menu } from "@mantine/core";
import { IconButton } from "../../Button/IconButton";
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
import { authActions } from "../../../../store";
import Button from "../../Button/Button";
import cache from "@mongez/cache";

export default function User() {
  const trans = useTranslations("Layout");
  const dispatch = useDispatch();

  if (!cache.get("token")) {
    return (
      <Wrapper>
        <IconButton noStyle href={`auth${URLS.auth.login}`}>
          <UserIcon size={40} color={theme.colors.black[300]} />
        </IconButton>
      </Wrapper>
    );
  }

  return (
    <>
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
                <Menu.Item component={Link} href={URLS.account.addressBook}>
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
              </div>
            </WrapperDropdown>
          </Menu.Dropdown>
        </Menu>
      </Wrapper>
    </>
  );
}
