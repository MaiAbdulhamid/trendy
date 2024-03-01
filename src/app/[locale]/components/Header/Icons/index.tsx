import { useCallback, useEffect, useState } from "react";
import { CartIcon, OrdersIcon, UserIcon, WishListIcon } from "../../../assets/svgs";
import URLS from "../../../utils/urls";
import Button from "../../Button/Button";
import User from "../../common/User";
import cache from "@mongez/cache";
import theme from "@/app/[locale]/utils/theme";

const links = [
  { link: URLS.account.orders, text: <OrdersIcon color={theme.colors.black[400]} size={34} />, label: "orders" },
  { link: URLS.account.cart, text: <CartIcon />, label: "cart" },
];
const Icons = () => {
  const [token, setToken] = useState();

  const fetchToken = useCallback(() => {
    return cache.get("token");
  }, []);

  useEffect(() => {
    setToken(fetchToken());
  }, []);
  const items = links.map((link) => (
    <a key={link.label} href={link.link}>
      {link.text}
    </a>
  ));
  return (
    <>
      {items}
      {token && (
        <Button noStyle href={URLS.account.wishlist}>
          <WishListIcon />
        </Button>
      )}
      <User />
    </>
  );
};

export default Icons;
